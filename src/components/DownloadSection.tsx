import { Download, Info, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DownloadSection() {
    const [showPlayStoreNote, setShowPlayStoreNote] = useState(false);

    useEffect(() => {
        if (showPlayStoreNote) {
            const timer = setTimeout(() => setShowPlayStoreNote(false), 6000);
            return () => clearTimeout(timer);
        }
    }, [showPlayStoreNote]);

    return (
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="w-full md:w-1/2 relative flex justify-center perspective-[1000px] overflow-hidden">
                    <motion.div
                        initial={{ y: 0, rotateY: -5 }}
                        animate={{ y: [0, -15, 0], rotateY: [-5, -2, -5] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-72 h-[605px] z-20 group perspective-[1000px]"
                    >
                        <div className="absolute inset-0 bg-[#0a0a0a] border-[12px] border-[#1a1a1a] rounded-[1.5rem] shadow-[0_0_80px_rgba(255,14,14,0.15)] overflow-hidden transition-all duration-700">
                            {/* Static Screenshot */}
                            <img
                                src="/Screenshot 2026-03-16 at 5.31.05 AM.png"
                                className="w-full h-full object-cover"
                                alt="SDF Go Live App Interface"
                            />

                            {/* Inner Bezel Shine & Notch */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />
                            <div className="absolute inset-0 border border-white/5 rounded-[2.8rem] pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
                        </div>
                    </motion.div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-accent-blue)]/20 blur-[100px] rounded-full z-10" />
                </div>

                <div className="w-full md:w-1/2 text-left">
                    <h2 className="heading-epic mb-6 leading-tight text-white">
                        READY <span className="italic px-2" style={{ fontFamily: "'Cormorant SC', serif", color: "#E6C9A8", textTransform: "lowercase", fontWeight: 300 }}>to</span>{" "}
                        <span className="text-gradient-live">GO LIVE?</span>
                    </h2>
                    <p className="text-xl text-white/70 mb-10 max-w-lg font-sans">Join millions of users worldwide. Experience the next generation of social streaming, gifting, and community building all in one app.</p>
                    <div className="flex flex-col sm:flex-row gap-4 relative">
                        <a href="https://www.mediafire.com/file/m7c8c6jpuuh407e/SDF-GO-BUGS+(1).apk/file" target="_blank" className="flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-6 rounded-2xl hover:bg-gray-200 transition-colors">
                            <div className="flex-1 text-left"><div className="text-[10px] font-bold opacity-60">DOWNLOAD</div><div className="text-lg leading-none">Android APK</div></div>
                            <Download size={24} />
                        </a>

                        <button
                            onClick={() => setShowPlayStoreNote(true)}
                            className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-bold py-4 px-6 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex-1 text-left"><div className="text-[10px] font-bold opacity-40">COMING SOON</div><div className="text-lg leading-none">Google Play</div></div>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="opacity-40 group-hover:opacity-100 transition-opacity">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C21.44,12.45 21.44,9.55 18.66,7.95L16.81,6.88L14.69,12L16.81,15.12M4.27,2.15L14.69,12L16.22,9.75L6.65,4.25C5.45,3.55 4.26,3.39 4.27,2.15M4.27,21.85C4.26,20.61 5.45,20.45 6.65,19.75L16.22,14.25L14.69,12L4.27,21.85Z" />
                            </svg>
                        </button>

                        <AnimatePresence>
                            {showPlayStoreNote && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                    className="absolute -top-32 left-0 right-0 sm:left-auto sm:right-0 bg-[#1a0505] border border-[#ff3b30]/30 p-4 rounded-2xl shadow-2xl z-50 flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#ff3b30]/10 flex items-center justify-center shrink-0">
                                        <Info size={20} className="text-[#ff3b30]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-white font-bold text-sm">Coming Soon</h4>
                                            <button onClick={() => setShowPlayStoreNote(false)} className="text-white/20 hover:text-white"><X size={14} /></button>
                                        </div>
                                        <p className="text-white/50 text-[13px] leading-snug">We are moving very fast and working to bring SDFGo Live on Playstore very soon. Stay tuned!</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
