import { motion } from "framer-motion";

export default function PartyRoom() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-8xl mx-auto relative z-20">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent-blue)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px]">
                    <motion.div
                        initial={{ y: 0, rotateY: -10, rotateX: 5 }}
                        animate={{
                            y: [0, -20, 0],
                            rotateY: [-10, -5, -10],
                            rotateX: [5, 8, 5]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full max-w-[340px] aspect-[9/19.5] z-20"
                    >
                        <div className="absolute inset-0 rounded-[3rem] border-[8px] border-[#1a1a1a] bg-[#050505] shadow-[20px_40px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                            <div className="absolute inset-0 border-[2px] border-white/5 rounded-[2.5rem]" />
                            <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden">
                                <video
                                    src="/party-room.mov"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                        </div>
                    </motion.div>
                </div>

                <div className="w-full lg:w-1/2 relative z-10 text-left">
                    <h2 className="heading-epic mb-6 text-white">
                        <span className="italic px-2" style={{ fontFamily: "'Cormorant SC', serif", color: "#ff0e0eff", fontWeight: 500 }}>Voice</span> Parties
                    </h2>
                    <p className="text-xl text-white/70 mb-8 font-sans">
                        Build your community with multi-speaker voice rooms. Invite up to 8 guests on stage to chat, debate, sing, or just hang out with your most loyal fans in real-time.
                    </p>
                    <ul className="space-y-4 text-lg text-white/80 font-sans">
                        <li className="flex items-center gap-3"><span className="text-[var(--color-accent-blue)]">✓</span> Real-time low-latency audio</li>
                        <li className="flex items-center gap-3"><span className="text-[var(--color-accent-blue)]">✓</span> Seat management and moderation</li>
                        <li className="flex items-center gap-3"><span className="text-[var(--color-accent-blue)]">✓</span> Virtual gifting available while broadcasting</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
