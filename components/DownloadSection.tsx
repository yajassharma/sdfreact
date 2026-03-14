"use client";

import { Smartphone, Download, Info, X } from "lucide-react";
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
                <div className="w-full md:w-1/2 relative flex justify-center perspective-[1000px]">
                    <div className="relative w-64 h-[500px] z-20 group">
                        {/* Phone Mockup Placeholder */}
                        <div className="absolute inset-0 bg-[#0a0a0a] border-[8px] border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(128,0,0,0.5)] overflow-hidden transform rotate-y-[-15deg] group-hover:rotate-y-[0deg] transition-transform duration-700">
                            {/* Screen Content */}
                            <div className="w-full h-full relative p-4 flex flex-col bg-gradient-to-b from-[#1a0505] to-black">
                                <div className="h-6 mx-auto w-1/3 bg-black rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-30" />

                                {/* Fake App header */}
                                <div className="flex justify-between items-center mt-6 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-blue)]" />
                                    <div className="flex gap-2">
                                        <div className="w-4 h-4 rounded-full bg-white/20" />
                                        <div className="w-4 h-4 rounded-full bg-white/20" />
                                    </div>
                                </div>

                                {/* Fake App Content Streams */}
                                <div className="flex-1 rounded-2xl bg-[#1a0505] border border-white/10 mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-purple)]/40 to-transparent" />
                                    <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                                        <div className="w-24 h-3 bg-white/80 rounded-full" />
                                        <div className="w-16 h-2 bg-white/50 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-4">
                                    <div className="w-1/2 h-24 rounded-2xl bg-[#2a0808] border border-white/10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>
                                    <div className="w-1/2 h-24 rounded-2xl bg-[#2a0808] border border-white/10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>
                                </div>

                                {/* Fake App footer */}
                                <div className="flex justify-between items-center px-2 mt-auto pb-2">
                                    <div className="w-6 h-6 rounded bg-white/20" />
                                    <div className="w-6 h-6 rounded bg-white/20" />
                                    <div className="w-12 h-12 -mt-6 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-orange)] shadow-[0_0_15px_rgba(255,51,51,0.6)] border-2 border-white flex items-center justify-center">
                                        <div className="w-4 h-4 bg-white rounded-sm" />
                                    </div>
                                    <div className="w-6 h-6 rounded bg-white/20" />
                                    <div className="w-6 h-6 rounded bg-white/20" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Glow Effects */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-accent-blue)]/20 blur-[100px] rounded-full z-10" />
                </div>
                <div className="w-full md:w-1/2 relative">
                    <h2 className="heading-epic mb-6 text-left leading-tight text-white">
                        READY <span className="italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#E6C9A8", textTransform: "lowercase", fontWeight: 300 }}>to</span>{" "}
                        <span className="text-gradient-live">GO LIVE?</span>
                    </h2>
                    <p className="text-xl text-white/70 mb-10 max-w-lg">
                        Join millions of users worldwide. Experience the next generation of social streaming, gifting, and community building all in one app.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 relative">
                        <a
                            href="https://www.mediafire.com/file/m7c8c6jpuuh407e/SDF-GO-BUGS+(1).apk/file"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-6 rounded-2xl hover:bg-gray-200 transition-colors relative"
                        >
                            <div className="flex-1 text-left">
                                <div className="text-[10px] font-bold opacity-60">DOWNLOAD</div>
                                <div className="text-lg leading-none">Android APK</div>
                            </div>
                            <Download size={24} />
                        </a>

                        <AnimatePresence>
                            {showPlayStoreNote && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="absolute bottom-full left-0 mb-4 w-full sm:w-[320px] glass p-6 rounded-3xl border border-white/20 shadow-2xl z-50 backdrop-blur-xl"
                                >
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)]/20 flex items-center justify-center shrink-0">
                                            <Info size={20} className="text-[var(--color-accent-blue)]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Play Store Status</h4>
                                            <p className="text-white/70 text-xs leading-relaxed">
                                                SdfGo Live is actively working and cooperating with Google Play to bring the app to the Play Store very soon. Stay tuned!
                                            </p>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setShowPlayStoreNote(false);
                                            }}
                                            className="text-white/30 hover:text-white transition-colors"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                    <div className="absolute -bottom-2 left-8 w-4 h-4 glass border-r border-b border-white/20 rotate-45" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
