import { motion } from "framer-motion";
import { Gem, Flower, Landmark, ArrowRight } from "lucide-react";

export default function CreatorEconomy() {
    const listItems = [
        {
            icon: Gem,
            title: "1. Receive Diamonds",
            desc: "Fans send you spectacular animated gifts purchased with Diamonds.",
            color: "#ff3b30"
        },
        {
            icon: Flower,
            title: "2. Convert to Flora",
            desc: "Gifts automatically convert to Flora, your creator balance currency.",
            color: "#ffcc00"
        },
        {
            icon: Landmark,
            title: "3. Withdraw to Bank",
            desc: "Cash out your Flora directly to your linked bank account worldwide.",
            color: "#34c759"
        }
    ];

    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-20 overflow-hidden text-left">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Left Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.8]">
                        INFLUENCE<br />
                        <span className="italic font-light lowercase text-[#E6C9A8] text-5xl md:text-6xl block my-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>into</span>
                        <span className="text-gradient-live">INCOME</span>
                    </h2>

                    <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl font-sans leading-relaxed">
                        Our transparent reward system ensures that your effort pays off.
                        Receive virtual gifts, convert them to Flora, and withdraw directly to your bank account.
                    </p>

                    <div className="space-y-8">
                        {/* Diamond Step */}
                        <div className="flex gap-6 items-start group">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110 bg-[#ff3b30]15 border border-[#ff3b30]30">
                                <img src="/diamond-icon.png" className="w-10 h-10 object-contain" alt="Diamond" />
                            </div>
                            <div>
                                <div className="text-white font-black uppercase text-lg tracking-tight mb-1">1. Receive Diamonds</div>
                                <div className="text-white/40 text-sm font-sans leading-relaxed">Fans send you spectacular animated gifts purchased with Diamonds.</div>
                            </div>
                        </div>

                        {/* Flora Step */}
                        <div className="flex gap-6 items-start group">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110 bg-[#ffcc00]15 border border-[#ffcc00]30">
                                <img src="/flora-icon.png" className="w-10 h-10 object-contain" alt="Flora" />
                            </div>
                            <div>
                                <div className="text-white font-black uppercase text-lg tracking-tight mb-1">2. Convert to Flora</div>
                                <div className="text-white/40 text-sm font-sans leading-relaxed">Gifts automatically convert to Flora, your creator balance currency.</div>
                            </div>
                        </div>

                        {/* Landmark Step */}
                        <div className="flex gap-6 items-start group">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110 bg-[#34c759]15 border border-[#34c759]30">
                                <Landmark size={20} className="text-[#34c759]" />
                            </div>
                            <div>
                                <div className="text-white font-black uppercase text-lg tracking-tight mb-1">3. Withdraw to Bank</div>
                                <div className="text-white/40 text-sm font-sans leading-relaxed">Cash out your Flora directly to your linked bank account worldwide.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual - Flow Card */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 relative w-full max-w-xl"
                    >
                        <div className="flex items-center justify-between gap-4 md:gap-8">
                            {/* Diamonds */}
                            <div className="flex flex-col items-center gap-4 flex-1">
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#ff3b30]/10 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-[#ff3b30]/20 blur-2xl rounded-full opacity-50" />
                                    <img src="/diamond-icon.png" alt="Diamond" className="w-10 h-10 md:w-16 md:h-16 relative z-10 object-contain drop-shadow-[0_0_15px_rgba(255,59,48,0.5)]" />
                                </div>
                                <span className="text-white font-black uppercase text-xs tracking-widest opacity-80">Diamonds</span>
                            </div>

                            <ArrowRight className="text-white/20 shrink-0" />

                            {/* Flora */}
                            <div className="flex flex-col items-center gap-4 flex-1">
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#ffcc00]/10 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-[#ffcc00]/20 blur-2xl rounded-full opacity-50" />
                                    <img src="/flora-icon.png" alt="Flora" className="w-10 h-10 md:w-16 md:h-16 relative z-10 object-contain drop-shadow-[0_0_15px_rgba(255,204,0,0.5)]" />
                                </div>
                                <span className="text-white font-black uppercase text-xs tracking-widest opacity-80">Flora</span>
                            </div>

                            <ArrowRight className="text-white/20 shrink-0" />

                            {/* Real Cash */}
                            <div className="flex flex-col items-center gap-4 flex-1">
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#34c759] flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-[#34c759]/40 blur-2xl rounded-full shadow-[0_0_40px_rgba(52,199,89,0.3)]" />
                                    <Landmark size={32} className="text-white relative z-10" />
                                </div>
                                <span className="text-white font-black uppercase text-xs tracking-widest opacity-80">Real Cash</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
