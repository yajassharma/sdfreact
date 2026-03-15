import { motion } from "framer-motion";
import { Zap, Shield, Heart, Trophy, MessageSquare, Gift } from "lucide-react";

const features = [
    {
        title: "3D Virtual Gifts",
        desc: "Interactive 3D gifting system that makes every interaction memorable.",
        icon: Gift,
        color: "var(--color-accent-purple)"
    },
    {
        title: "Low Latency",
        desc: "Ultra-fast streaming technology ensuring real-time connection.",
        icon: Zap,
        color: "var(--color-accent-orange)"
    },
    {
        title: "Secure Earnings",
        desc: "Transparent monetization with instant withdrawal features.",
        icon: Shield,
        color: "var(--color-accent-blue)"
    }
];

export default function Features() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-8 group hover:border-white/20 transition-all duration-500"
                    >
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500"
                            style={{ backgroundColor: `${feat.color}22`, border: `1px solid ${feat.color}44` }}
                        >
                            <feat.icon size={28} style={{ color: feat.color }} />
                        </div>
                        <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{feat.title}</h3>
                        <p className="text-white/60 leading-relaxed font-sans">{feat.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
