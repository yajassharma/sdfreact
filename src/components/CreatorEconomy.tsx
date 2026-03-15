import { motion } from "framer-motion";

export default function CreatorEconomy() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2">
                    <h2 className="heading-epic mb-6 text-left text-white">
                        THE <span className="italic px-2" style={{ fontFamily: "'Cormorant SC', serif", color: "#FAD02E", fontWeight: 300 }}>Creator</span><br />
                        <span className="text-gradient-live">ECONOMY</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-lg leading-relaxed font-sans">
                        We're not just a platform; we're an ecosystem where your talent becomes a sustainable business.
                    </p>
                    <div className="space-y-6">
                        {[
                            { label: "Daily Milestones", val: "Earn bonuses for consistent streaming" },
                            { label: "Agency Partnership", val: "Professional growth with dedicated support" },
                            { label: "Global Reach", val: "Connect with fans across borders" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-2 h-8 bg-[var(--color-accent-blue)] rounded-full shrink-0" />
                                <div>
                                    <div className="text-white font-black uppercase text-sm tracking-widest">{item.label}</div>
                                    <div className="text-white/50 text-sm">{item.val}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="glass p-6 rounded-[2.5rem] mt-12"
                        >
                            <img src="/diamond-icon.png" className="w-16 h-16 mb-4" alt="Diamond" />
                            <div className="text-2xl font-black text-white">$4.2k</div>
                            <div className="text-xs text-white/40 uppercase tracking-widest">Avg. Monthly</div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="glass p-6 rounded-[2.5rem]"
                        >
                            <img src="/flora-icon.png" className="w-16 h-16 mb-4" alt="Flora" />
                            <div className="text-2xl font-black text-white">12M+</div>
                            <div className="text-xs text-white/40 uppercase tracking-widest">Gifts Exchanged</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
