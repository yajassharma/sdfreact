import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import HeroOverlay from "./HeroOverlay";

const FRAME_COUNT = 128;
const INITIAL_PRELOAD_COUNT = 15;

const getFrameUrl = (index: number) =>
    `/ezgif-split/frame_${index.toString().padStart(3, "0")}_delay-0.062s.webp`;

export default function ScrollyDragon() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [videoReady, setVideoReady] = useState(false);

    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
    const lastRenderedFrame = useRef<number>(-1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        let loadedCount = 0;
        const totalToLoad = FRAME_COUNT;

        const loadImage = (index: number): Promise<void> => {
            if (imagesRef.current[index]) return Promise.resolve();
            return new Promise((resolve) => {
                const img = new Image();
                img.src = getFrameUrl(index);
                img.onload = async () => {
                    // Start decoding immediately to avoid main-thread jank later
                    if ('decode' in img) {
                        try { await img.decode(); } catch (e) { /* ignore */ }
                    }
                    imagesRef.current[index] = img;
                    loadedCount++;
                    setProgress(Math.floor((loadedCount / totalToLoad) * 100));

                    if (index === 0) {
                        requestAnimationFrame(() => renderFrame(0));
                    }

                    if (loadedCount >= INITIAL_PRELOAD_COUNT && !loaded) {
                        // We don't set loaded yet, we wait for videoReady in the render block
                    }
                    resolve();
                };
                img.onerror = () => resolve();
            });
        };

        const startLoading = async () => {
            const isLowEnd = window.innerWidth < 480;

            // Priority 1: Critical start/end frames
            const criticalIndices = [0, 1, 2, 3, 4, 5, FRAME_COUNT - 1];
            await Promise.all(criticalIndices.map(loadImage));

            // Priority 2: Spread throughout the range to ensure dragon is always visible
            // Load every 10th frame first
            const spread = [];
            for (let i = 0; i < FRAME_COUNT; i += 10) spread.push(i);
            await Promise.all(spread.filter(i => !imagesRef.current[i]).map(loadImage));

            // Priority 3: Batched rest
            const remainingIndices = Array.from({ length: FRAME_COUNT }, (_, i) => i)
                .filter(i => !imagesRef.current[i]);

            const batchSize = isLowEnd ? 5 : 10;
            for (let i = 0; i < remainingIndices.length; i += batchSize) {
                await Promise.all(remainingIndices.slice(i, i + batchSize).map(loadImage));
                // Allow UI to breathe
                await new Promise(r => setTimeout(r, 0));
            }
        };

        startLoading();

        const handleResize = () => {
            if (canvasRef.current) {
                const scale = window.innerWidth < 480 ? 0.75 : 1;
                canvasRef.current.width = window.innerWidth * scale;
                canvasRef.current.height = window.innerHeight * scale;
                renderFrame(lastRenderedFrame.current >= 0 ? lastRenderedFrame.current : 0);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const renderFrame = (index: number) => {
        if (!canvasRef.current) return;

        // Closest frame search logic to prevent "stuck" or empty canvas
        let img = imagesRef.current[index];
        if (!img) {
            // Find nearest loaded frame
            let left = index - 1;
            let right = index + 1;
            while (left >= 0 || right < FRAME_COUNT) {
                if (left >= 0 && imagesRef.current[left]) {
                    img = imagesRef.current[left];
                    break;
                }
                if (right < FRAME_COUNT && imagesRef.current[right]) {
                    img = imagesRef.current[right];
                    break;
                }
                left--;
                right++;
            }
        }

        if (!img) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        ctx.imageSmoothingEnabled = !isMobile;

        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        lastRenderedFrame.current = index;
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const currentlyScrolling = latest > 0.001 && latest < 0.8;
        if (currentlyScrolling !== isScrolling) {
            setIsScrolling(currentlyScrolling);
        }

        if (loaded) {
            const index = Math.min(Math.floor((latest / 0.8) * (FRAME_COUNT - 1)), FRAME_COUNT - 1);
            if (index !== lastRenderedFrame.current) {
                requestAnimationFrame(() => renderFrame(index));
            }
        }
    });

    useEffect(() => {
        if (videoRef.current) {
            if (isScrolling) {
                videoRef.current.pause();
            } else if (loaded) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) playPromise.catch(() => { });
            }
        }
    }, [isScrolling, loaded]);

    // Only mark as fully loaded when critical frames AND video are ready
    useEffect(() => {
        const hasCriticalFrames = imagesRef.current[0] && imagesRef.current[1];
        if (hasCriticalFrames && videoReady && !loaded) {
            setLoaded(true);
        }
    }, [progress, videoReady]);

    return (
        <section ref={containerRef} className="h-[600vh] w-full relative bg-[#050505]">
            <div className="sticky top-0 h-screen w-full bg-[#050505] overflow-hidden z-0 gpu-accelerated">
                {!loaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-[500] bg-black">
                        <div className="relative z-[510] flex flex-col items-center">
                            <motion.img
                                src="/logo.png"
                                alt="SDF Go Logo"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-24 md:w-32 mb-8 drop-shadow-[0_0_30px_rgba(255,85,0,0.4)]"
                            />
                            <div className="flex flex-col items-center gap-2 mb-6 text-center">
                                <div className="text-white text-3xl md:text-5xl font-black text-gradient-live tracking-tight uppercase italic leading-none">
                                    {progress < 30 ? "AWAKENING" : progress < 70 ? "BUILDING" : "UNLEASHING"}
                                </div>
                                <div className="text-[var(--color-accent-blue)] font-mono text-sm tracking-widest opacity-80 uppercase font-bold">
                                    {progress < 20 ? "Feeding the dragon..." :
                                        progress < 40 ? "Polishing the gift boxes..." :
                                            progress < 60 ? "Connecting to the vibe..." :
                                                progress < 80 ? "Setting the stage..." :
                                                    "Joining the kingdom..."}
                                </div>
                            </div>
                            <div className="w-80 h-[6px] bg-white/5 rounded-full overflow-hidden relative mb-4">
                                <div
                                    className="h-full bg-gradient-to-r from-[var(--color-accent-orange)] via-red-500 to-[var(--color-accent-blue)] transition-all duration-300 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="flex justify-between w-80 font-mono text-[10px] tracking-tighter text-white/40 uppercase font-bold">
                                <span>{progress}% LOADED</span>
                                <span>DONT BLINK</span>
                            </div>
                        </div>
                    </div>
                )}

                <video
                    ref={videoRef}
                    src="/Whisk_gjy0cdzzctnwugmy0ynyktytctmyqtlkfzn00cn.mov"
                    muted
                    autoPlay
                    loop
                    playsInline
                    onCanPlayThrough={() => setVideoReady(true)}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${!isScrolling && loaded ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                />

                <canvas
                    ref={canvasRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isScrolling && loaded ? "opacity-100" : "opacity-0"}`}
                />

                <HeroOverlay scrollYProgress={scrollYProgress} />
            </div>
        </section>
    );
}
