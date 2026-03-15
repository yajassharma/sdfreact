"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface HeroOverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function HeroOverlay({ scrollYProgress }: HeroOverlayProps) {
    // Section 1: 0% to 15% (scaled from 20%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const pointer1 = useTransform(scrollYProgress, (v) => (v < 0.16 ? "auto" : "none"));

    // Section 2: 24% to 44% (scaled from 30%-55%)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.28, 0.36, 0.44], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.28], [50, 0]);
    const pointer2 = useTransform(scrollYProgress, (v) => (v >= 0.2 && v < 0.44 ? "auto" : "none"));

    // Section 3: 48% to 80% (scaled from 60%-100%)
    const opacity3 = useTransform(scrollYProgress, [0.44, 0.52, 0.72, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.44, 0.52], [50, 0]);
    const pointer3 = useTransform(scrollYProgress, (v) => (v >= 0.44 && v < 0.8 ? "auto" : "none"));

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1, pointerEvents: pointer1 as any }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            >
                <img
                    src="/hero-text.png"
                    alt="SDF Go LIVE"
                    className="w-full md:w-[100%] max-w-12xl -mb-10 md:-mb-20 opacity-90 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all px-4"
                />

                <p className="max-w-small md:max-w-xl mx-auto mt-4 md:mt-0 text-base md:text-xl text-white/90 leading-relaxed font-sans px-4" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                    India's premier destination for high-performance live streaming.
                    Empowering creators to build their kingdoms with real-time 3D gifting and
                    seamless voice room interactions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12 items-center">
                    {/* Primary CTA — rotating silver stroke */}
                    <div className="cta-btn-wrapper scale-90 md:scale-100">
                        <a
                            href="https://www.mediafire.com/file/m7c8c6jpuuh407e/SDF-GO-BUGS+(1).apk/file"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white font-black py-4 px-8 md:px-10 rounded-full tracking-widest uppercase text-xs md:text-sm shadow-[0_0_40px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-[1.03] flex items-center gap-2 md:gap-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                            Download App
                        </a>
                    </div>
                    <a
                        href="https://forms.gle/JvYsyzffHVJD6VhMA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass text-white font-bold py-3.5 px-6 md:py-4 md:px-8 rounded-full hover:bg-white/10 transition-all duration-300 text-sm md:text-base inline-block"
                    >
                        Become a Creator
                    </a>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2, pointerEvents: pointer2 as any }}
                className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:px-24"
            >
                <h2 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8">
                    Stream.<br />
                    Connect.<br />
                    <span className="text-gradient-live italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#E6C9A8" }}>Earn.</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/80 max-w-xl glass p-8 rounded-3xl">
                    Creators can go live, receive gifts, and withdraw real earnings directly to their bank accounts.
                </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3, pointerEvents: pointer3 as any }}
                className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24"
            >
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 max-w-3xl">
                    Where Creators<br />
                    Build <span className="text-gradient-live italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#E6C9A8" }}>Kingdoms</span>
                </h2>
                <ul className="text-xl md:text-2xl text-white/90 space-y-6 glass p-8 rounded-3xl text-left font-sans">
                    <li className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-accent-purple)] flex items-center justify-center shadow-[0_0_20px_var(--color-accent-purple)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                        </div>
                        Party voice rooms
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-accent-blue)] flex items-center justify-center shadow-[0_0_20px_var(--color-accent-blue)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" /></svg>
                        </div>
                        Live broadcasting
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-accent-orange)] flex items-center justify-center shadow-[0_0_20px_var(--color-accent-orange)] text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect width="20" height="5" x="2" y="7" /><line x1="12" x2="12" y1="22" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                        </div>
                        Real-time gifting
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}
