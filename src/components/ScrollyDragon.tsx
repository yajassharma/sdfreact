import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import HeroOverlay from "./HeroOverlay";

const FRAME_COUNT = 128;
const INITIAL_PRELOAD_COUNT = 15;

const getFrameUrl = (index: number) =>
    `/ezgif-split/frame_${index.toString().padStart(3, "0")}_delay-0.062s.webp`;

export default function ScrollyDragon() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
    const lastRenderedFrame = useRef<number>(-1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        let loadedCount = 0;
        const totalToLoad = FRAME_COUNT;

        const loadImage = (index: number): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = getFrameUrl(index);
                img.onload = () => {
                    imagesRef.current[index] = img;
                    loadedCount++;
                    setProgress(Math.floor((loadedCount / totalToLoad) * 100));

                    if (index === 0 && !loaded) {
                        requestAnimationFrame(() => renderFrame(0));
                    }

                    if (loadedCount === INITIAL_PRELOAD_COUNT) {
                        setLoaded(true);
                    }
                    resolve();
                };
                img.onerror = () => resolve();
            });
        };

        const startLoading = async () => {
            const criticalIndices = Array.from({ length: INITIAL_PRELOAD_COUNT }, (_, i) => i);
            await Promise.all(criticalIndices.map(loadImage));

            const remainingIndices = Array.from({ length: totalToLoad - INITIAL_PRELOAD_COUNT }, (_, i) => i + INITIAL_PRELOAD_COUNT);

            const batchSize = 5;
            for (let i = 0; i < remainingIndices.length; i += batchSize) {
                const batch = remainingIndices.slice(i, i + batchSize);
                await Promise.all(batch.map(loadImage));
            }
        };

        startLoading();

        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                renderFrame(lastRenderedFrame.current >= 0 ? lastRenderedFrame.current : 0);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const renderFrame = (index: number) => {
        const img = imagesRef.current[index];
        if (!img || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

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
                videoRef.current.play().catch(() => { });
            }
        }
    }, [isScrolling, loaded]);

    return (
        <section ref={containerRef} className="h-[600vh] w-full relative bg-[#050505]">
            <div className="sticky top-0 h-screen w-full bg-[#050505] overflow-hidden z-0">
                {!loaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-[200] bg-[#050505]">
                        <div className="relative z-10 flex flex-col items-center">
                            <img src="/logo.png" alt="SDF Go Logo" className="w-24 md:w-32 mb-8 drop-shadow-[0_0_30px_rgba(255,85,0,0.4)]" />
                            <div className="flex flex-col items-center gap-2 mb-6">
                                <div className="text-white text-3xl md:text-4xl font-black text-gradient-live tracking-[0.3em] uppercase italic">
                                    Initializing
                                </div>
                                <div className="text-[var(--color-accent-blue)] font-mono text-sm tracking-widest opacity-80 uppercase">
                                    Optimizing Dragon Sequence
                                </div>
                            </div>
                            <div className="w-80 h-[4px] bg-white/5 rounded-full overflow-hidden relative mb-4">
                                <div
                                    className="h-full bg-gradient-to-r from-[var(--color-accent-orange)] via-red-500 to-[var(--color-accent-blue)] transition-all duration-300 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="flex justify-between w-80 font-mono text-[10px] tracking-tighter text-white/40 uppercase">
                                <span>{progress}% READY</span>
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
