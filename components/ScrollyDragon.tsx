"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import HeroOverlay from "./HeroOverlay";

const FRAME_COUNT = 128;

const currentFrame = (index: number) =>
    `/ezgif-split/frame_${index.toString().padStart(3, "0")}_delay-0.062s.webp`;

export default function ScrollyDragon() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [minTimeElapsed, setMinTimeElapsed] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 0.8], [0, FRAME_COUNT - 1], { clamp: true });

    useEffect(() => {
        // Minimum loading time
        const timer = setTimeout(() => setMinTimeElapsed(true), 1500);

        // Preload images
        let loadedCount = 0;
        const preloadImages = () => {
            const imgArray: HTMLImageElement[] = [];
            for (let i = 0; i < FRAME_COUNT; i++) {
                const img = new Image();
                img.src = currentFrame(i);
                img.onload = () => {
                    loadedCount++;
                    setProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
                    if (loadedCount === FRAME_COUNT) {
                        // Images are loaded, but we wait for timer too
                    }
                };
                imgArray.push(img);
            }
            setImages(imgArray);
        };

        preloadImages();
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (progress === 100 && minTimeElapsed) {
            setLoaded(true);
        }
    }, [progress, minTimeElapsed]);

    const renderFrame = (index: number) => {
        if (!images.length || !canvasRef.current || !images[index]) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // object-fit: cover logic within canvas
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

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useEffect(() => {
        if (loaded && canvasRef.current) {
            // Set canvas dimensions once or on resize
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            renderFrame(0);
        }
    }, [loaded]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const currentlyScrolling = latest > 0.001 && latest < 0.8; // Dragon stops after 80%
        if (currentlyScrolling !== isScrolling) {
            setIsScrolling(currentlyScrolling);
        }
        if (loaded) {
            const frameToRender = Math.min(Math.floor((latest / 0.8) * (FRAME_COUNT - 1)), FRAME_COUNT - 1);
            if (latest <= 0.8) {
                requestAnimationFrame(() => renderFrame(frameToRender));
            } else {
                requestAnimationFrame(() => renderFrame(FRAME_COUNT - 1));
            }
        }
    });

    useEffect(() => {
        if (videoRef.current) {
            if (isScrolling) {
                videoRef.current.pause();
            } else if (loaded) {
                videoRef.current.play().catch((err) => {
                    console.log("Auto-play blocked or error:", err);
                });
            }
        }
    }, [isScrolling, loaded]);

    useEffect(() => {
        const handleResize = () => {
            if (loaded && canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                requestAnimationFrame(() => renderFrame(Math.min(Math.floor(frameIndex.get()), FRAME_COUNT - 1)));
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [loaded]);

    return (
        <section ref={containerRef} className="h-[600vh] w-full relative bg-[var(--background)]">
            <div className="sticky top-0 h-screen w-full bg-black overflow-hidden">
                {!loaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-[200] bg-[#050505] overflow-hidden">
                        {/* Futuristic HUD Corners */}
                        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-[var(--color-accent-orange)] opacity-50" />
                        <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[var(--color-accent-blue)] opacity-50" />
                        <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[var(--color-accent-purple)] opacity-50" />
                        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white opacity-20" />

                        {/* Scanning Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-accent-orange)] opacity-20 blur-[2px] animate-[scan_3s_linear_infinite]" />

                        <div className="relative z-10 flex flex-col items-center">
                            <img src="/logo.png" alt="SDF Go Logo" className="w-24 md:w-32 mb-8 drop-shadow-[0_0_30px_rgba(255,85,0,0.4)]" />

                            <div className="flex flex-col items-center gap-2 mb-6">
                                <div className="text-white text-3xl md:text-4xl font-black text-gradient-live tracking-[0.3em] uppercase italic">
                                    Initializing
                                </div>
                                <div className="text-[var(--color-accent-blue)] font-mono text-sm tracking-widest opacity-80 uppercase">
                                    System Status: Awakening Dragon
                                </div>
                            </div>

                            <div className="w-80 h-[4px] bg-white/5 rounded-full overflow-hidden relative mb-4">
                                <div
                                    className="h-full bg-gradient-to-r from-[var(--color-accent-orange)] via-red-500 to-[var(--color-accent-blue)] transition-all duration-300 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                                <div className="absolute top-0 left-0 h-full w-full bg-[length:20px_100%] bg-repeat-x opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} />
                            </div>

                            <div className="flex justify-between w-80 font-mono text-[10px] tracking-tighter text-white/40 uppercase">
                                <span></span>
                                <span className="text-[var(--color-accent-orange)] font-bold">{progress}% READY</span>
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
