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
                    <div className="relative w-64 h-[500px] z-20 group">
                        <div className="absolute inset-0 bg-[#0a0a0a] border-[8px] border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(128,0,0,0.5)] overflow-hidden transform group-hover:rotate-y-[0deg] transition-transform duration-700" style={{ transform: 'rotateY(-15deg)' }}>
                            <div className="w-full h-full relative p-4 flex flex-col bg-gradient-to-b from-[#1a0505] to-black">
                                <div className="h-6 mx-auto w-1/3 bg-black rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-30" />
                                <div className="flex justify-between items-center mt-6 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-blue)]" />
                                </div>
                                <div className="flex-1 rounded-2xl bg-[#1a0505] border border-white/10 mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-purple)]/40 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
