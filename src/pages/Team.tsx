import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
    {
        name: "Sahil Kumar Singh",
        role: "Founder / Chairman",
        image: "/Sahil Kumar.png",
        bio: "Sahil Kumar Singh provides the overall strategic vision for SDFGoLive, focusing on business expansion, technological innovation, and major investment strategies to scale digital platforms globaly."
    },
    {
        name: "Ms. Pihu Singh",
        role: "Chief Executive Officer (CEO)",
        image: "/Pihu Singh.png",
        bio: "Ms. Pihu Singh leads the organization with a focus on strategic planning and long-term business growth, supervising the Managing Director and all departments to ensure operational alignment."
    },
    {
        name: "Mr. Rahul Kumar Singh",
        role: "Managing Director (MD)",
        image: "/Rahul Kumar Singh.png",
        bio: "Mr. Rahul Kumar Singh oversees daily operations and implements the business strategies set by the CEO, coordinating closely with department heads to handle complex management challenges."
    },
    {
        name: "Mr. Chandan Kumar Singh",
        role: "SDF East India Admin",
        image: "/Chandan.png",
        bio: "Manages state-level operations and supervises district teams within the assigned territory, ensuring policy enforcement and providing guidance while tracking performance across the state."
    },
    {
        name: "Mr. SANJU DAYARAM DESAI",
        role: "SDF General Manager (GM)",
        image: "/Sanju.png",
        bio: "Responsible for daily operations management and team supervision, implementing company strategies and maintaining client relationships while reporting directly to the Managing Director."
    },
    {
        name: "Mr. Raman",
        role: "SDF Finance MD",
        image: "/Raman.png",
        bio: "Leads the organization's financial strategy and oversight, developing long-term business plans, managing profitability and building strategic partnerships to expand business opportunities."
    },
    {
        name: "Mr. DK Singh",
        role: "SDF Chief Security Officer (CSO)",
        image: "/DkSingh.png",
        bio: "Heads the Cyber Security Department, ensuring platform safety by monitoring account security, preventing fraud, and enforcing safety policies to protect users from abuse."
    }
];

export default function Team() {
    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-16 group transition-colors">
                    <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> Back to Home
                </Link>

                <header className="mb-24">
                    <h1 className="heading-epic mb-6 text-white text-left">
                        THE <span className="italic font-light lowercase text-[#E6C9A8]" style={{ fontFamily: "var(--font-cormorant), serif" }}>entire</span><br />
                        <span className="text-gradient-live">SQUAD</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 max-w-3xl font-sans text-left leading-relaxed">
                        Meet the leadership and operational force driving India's next-generation live streaming ecosystem.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-card p-10 flex flex-col items-start text-left group hover:border-[#ff5500]/20 transition-all duration-500"
                        >
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-8 border-2 border-white/10 group-hover:border-[#ff5500] transition-colors duration-500 shadow-xl">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight leading-none">{member.name}</h3>
                            <p className="text-[#ff5500] font-bold text-xs tracking-widest uppercase mb-8">{member.role}</p>
                            <p className="text-white/50 text-base leading-relaxed font-sans">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
