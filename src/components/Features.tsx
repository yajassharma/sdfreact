import { motion } from "framer-motion";
import { Video, Mic2, Gift, DollarSign, Crown, Trophy } from "lucide-react";

const features = [
    {
        title: "Live Video Broadcasting",
        desc: "Go live with crystal clear video, interact with fans in real-time, and build your kingdom.",
        icon: Video,
        color: "#ff3b30"
    },
    {
        title: "Party Audio Rooms",
        desc: "Host multi-speaker voice rooms. Hang out, chat, and connect with multiple guests on stage.",
        icon: Mic2,
        color: "#ff2d55"
    },
    {
        title: "Virtual Gifting Economy",
        desc: "Fans can support you with spectacular 3D animated gifts that light up your stream.",
        icon: Gift,
        color: "#ffcc00"
    },
    {
        title: "Creator Earnings",
        desc: "Turn your passion into profit. Diamond and Flora rewards convert directly into real money.",
        icon: DollarSign,
        color: "#34c759"
    },
    {
        title: "VIP / SVIP Rewards",
        desc: "Exclusive entrance effects, premium badges, and special privileges for top supporters.",
        icon: Crown,
        color: "#ff9500"
    },
    {
        title: "Level System & Achievements",
        desc: "Climb the ranks, unlock new features, and showcase your status to the entire platform.",
        icon: Trophy,
        color: "#007aff"
    }
];

export default function Features() {
    return (
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
            <div className="text-center mb-20">
                <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.8] mb-8">
                    UNLEASH <span className="italic font-light lowercase text-[#E6C9A8]" style={{ fontFamily: "var(--font-cormorant), serif" }}>your</span><br />
                    <span className="text-gradient-live">POTENTIAL</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-sans leading-relaxed">
                    Everything you need to grow your audience, build a loyal community, and make a living from your content.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="glass-card p-10 group hover:border-white/10 transition-all duration-500 flex flex-col items-start text-left"
                    >
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500"
                            style={{ backgroundColor: `${feat.color}15`, border: `1px solid ${feat.color}30` }}
                        >
                            <feat.icon size={32} style={{ color: feat.color }} />
                        </div>
                        <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight leading-none">{feat.title}</h3>
                        <p className="text-white/50 leading-relaxed font-sans text-sm">{feat.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
