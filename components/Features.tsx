import { Video, Mic2, Gift, DollarSign, Crown, Trophy } from "lucide-react";
import CurvedLoop from "./CurvedLoop";
export default function Features() {
    const features = [
        {
            icon: <Video className="w-8 h-8 text-[var(--color-accent-blue)]" />,
            title: "Live Video Broadcasting",
            description: "Go live with crystal clear video, interact with fans in real-time, and build your kingdom.",
        },
        {
            icon: <Mic2 className="w-8 h-8 text-[var(--color-accent-purple)]" />,
            title: "Party Audio Rooms",
            description: "Host multi-speaker voice rooms. Hang out, chat, and connect with multiple guests on stage.",
        },
        {
            icon: <Gift className="w-8 h-8 text-[var(--color-accent-orange)]" />,
            title: "Virtual Gifting Economy",
            description: "Fans can support you with spectacular 3D animated gifts that light up your stream.",
        },
        {
            icon: <DollarSign className="w-8 h-8 text-green-400" />,
            title: "Creator Earnings",
            description: "Turn your passion into profit. Diamond and Flora rewards convert directly into real money.",
        },
        {
            icon: <Crown className="w-8 h-8 text-yellow-400" />,
            title: "VIP / SVIP Rewards",
            description: "Exclusive entrance effects, premium badges, and special privileges for top supporters.",
        },
        {
            icon: <Trophy className="w-8 h-8 text-blue-400" />,
            title: "Level System & Achievements",
            description: "Climb the ranks, unlock new features, and showcase your status to the entire platform.",
        },
    ];

    return (
        <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-64 bg-[var(--color-accent-purple)] opacity-20 blur-[120px] rounded-full pointer-events-none" />

            <div className="text-center mb-20 relative z-10">
                <h2 className="heading-epic mb-6 leading-none text-white">
                    UNLEASH <span className="italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#E6C9A8", textTransform: "lowercase", fontWeight: 300 }}>your</span>{" "}
                    <span className="text-gradient-live">POTENTIAL</span>
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Everything you need to grow your audience, build a loyal community, and make a living from your content.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-blue)] opacity-0 group-hover:opacity-10 blur-[60px] rounded-full transition-opacity duration-500" />

                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                        <p className="text-white/70 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-full mt-15 md:mt-40 scale-400 md:scale-250">
                <CurvedLoop
                    marqueeText="INDIA'S 𖥕 NEXT 𖥕 GENERATION 𖥕 LIVE 𖥕 STREAMING 𖥕 PLATFORM 𖥕 "
                    speed={3.9}
                    curveAmount={0}
                    direction="left"
                    interactive
                    useIndianFlagTheme
                    showRibbon
                    ribbonColor="#E6C9A8"
                />
            </div>
        </section>
    );
}
