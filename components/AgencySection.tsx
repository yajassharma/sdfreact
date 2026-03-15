"use client";

import { Building2, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function AgencySection() {
    return (
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
            <div className="glass-card overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-purple)]/20 to-transparent pointer-events-none" />

                <div className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-16 relative z-10">
                    <div className="flex-1">
                        <h2 className="heading-epic mb-6 text-left">
                            Agency <span className="italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#FAD02E" }}>Partner</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                            Are you an agency? Recruit hosts, manage creators, and grow your community on SDF Go Live. Earn attractive commissions based on your creators' performance.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <Users className="text-[var(--color-accent-blue)]" />
                                </div>
                                <div className="font-bold">Creator Management</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <TrendingUp className="text-[var(--color-accent-orange)]" />
                                </div>
                                <div className="font-bold">Performance Analytics</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <Building2 className="text-[var(--color-accent-purple)]" />
                                </div>
                                <div className="font-bold">Dedicated Support</div>
                            </div>
                        </div>
                        <a
                            href="https://forms.gle/SFxacYTAmRT4GuXq8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:scale-105 inline-block"
                        >
                            Join the Agency Program
                        </a>
                    </div>

                    <div className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px]">
                        <motion.div
                            initial={{ y: 0, rotateY: 10, rotateX: 5 }}
                            animate={{
                                y: [0, -20, 0],
                                rotateY: [10, 5, 10],
                                rotateX: [5, 8, 5]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-full max-w-[300px] aspect-[9/19.5] z-20"
                        >
                            {/* Realistic Phone Frame */}
                            <div className="absolute inset-0 rounded-[2rem] border-[8px] border-[#1a1a1a] bg-[#050505] shadow-[20px_40px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                                {/* Bezel Detail */}
                                <div className="absolute inset-0 border-[2px] border-white/5 rounded-[1.5rem]" />

                                {/* Screen Content */}
                                <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden">
                                    <video
                                        src="/document_6170373402977640091.mov"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Glass Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />

                                {/* Dynamic Island / Notch */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                            </div>

                            {/* Side Buttons */}
                            <div className="absolute top-24 -left-2 w-1.5 h-12 bg-[#222] rounded-l-md" />
                            <div className="absolute top-40 -left-2 w-1.5 h-16 bg-[#222] rounded-l-md" />
                            <div className="absolute top-64 -left-2 w-1.5 h-16 bg-[#222] rounded-l-md" />
                            <div className="absolute top-32 -right-2 w-1.5 h-20 bg-[#222] rounded-r-md" />
                        </motion.div>

                        {/* Shadow underneath */}
                        <motion.div
                            animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.2, 0.3] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-48 h-8 bg-black/80 blur-xl rounded-full z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
