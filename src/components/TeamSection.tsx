const teamMembers = [
    {
        name: "Sahil Kumar Singh",
        role: "Founder / Chairman",
        image: "/Sahil Kumar.png",
        partialBio: "Visionary leader setting the direction for SDFGoLive and associated technology ventures.",
        fullBio: "Sahil Kumar Singh is a visionary leader who serves as the Founder and Chairman of SDFGoLive and its associated ventures. He provides the overall strategic vision and direction for organizations including KUMASINGH BIRPUR TECHNOLOGY and Alien Technology Therapy Centre. His leadership focuses on business expansion, technological innovation, and major investment strategies to scale digital platforms into global ecosystems. By guiding management teams and fostering strategic partnerships, he maintains the brand's reputation while planning long-term growth and operational excellence."
    },
    {
        name: "Ms. Pihu Singh",
        role: "Chief Executive Officer (CEO)",
        image: "/Pihu Singh.png",
        partialBio: "Leading the organization with strategic planning and professional oversight.",
        fullBio: "Ms. Pihu Singh serves as the Chief Executive Officer (CEO) of SDFGO Live, where she leads the entire organization with a focus on strategic planning and long-term business growth. She is responsible for final decision-making on major company matters and supervises the Managing Director and all departments to ensure operational alignment. Her role encompasses business development, policy creation, and financial oversight, representing the company in official capacities to ensure the sustained success and expansion of the platform."
    },
    {
        name: "Mr. Rahul Kumar Singh",
        role: "Managing Director (MD)",
        image: "/Rahul Kumar Singh.png",
        partialBio: "Overseeing company operations and ensuring strategic excellence across departments.",
        fullBio: "Mr. Rahul Kumar Singh is the Managing Director (MD) of SDFGO Live, overseeing the daily operations and implementing the business strategies set by the CEO. He leads senior management and department heads, ensuring that targets are met and policies are strictly followed. As a key decision-maker in operational issues, he coordinates closely with the CEO to report progress and handle complex management challenges, driving the company's growth through effective team leadership and strategic problem-solving."
    }
];

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TeamSection() {
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

    useEffect(() => {
        if (selectedMember) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedMember]);

    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
            <div className="text-center mb-16 relative z-10">
                <h2 className="heading-epic mb-6 leading-none text-white">
                    OUR <span className="italic px-2" style={{ fontFamily: "'Cormorant SC', serif", color: "#E6C9A8", textTransform: "lowercase", fontWeight: 300 }}>leadership</span>{" "}
                    <span className="text-gradient-live">BOARD</span>
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto font-sans">
                    Visionaries driving the technological landscape of SDF Go Live.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 relative z-10">
                {teamMembers.map((member, idx) => (
                    <motion.div
                        key={idx}
                        onClick={() => setSelectedMember(member)}
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 md:p-10 flex flex-col items-center text-center group cursor-pointer hover:border-[#ff5500]/30 transition-all duration-500"
                    >
                        <div className="w-28 h-28 rounded-2xl overflow-hidden mb-8 border border-white/10 group-hover:border-[#ff5500]/50 transition-all duration-500 shadow-2xl">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">{member.name}</h3>
                        <p className="text-[#ff5500] font-bold mb-6 text-[10px] tracking-widest uppercase">{member.role}</p>
                        <p className="text-white/50 text-sm leading-relaxed mb-10 font-sans line-clamp-3">{member.partialBio}</p>
                        <button className="text-[#0088ff] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Executive Profile <ArrowRight size={12} /></button>
                    </motion.div>
                ))}
            </div>

            <div className="text-center relative z-10">
                <Link to="/team">
                    <button className="bg-white text-black font-bold py-5 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all uppercase tracking-widest text-xs mx-auto flex items-center gap-3 active:scale-95">
                        View All Team <ArrowRight size={16} />
                    </button>
                </Link>
            </div>

            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[50vh] md:min-h-0"
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white z-[600] transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Left Side: Image */}
                            <div className="w-full md:w-[40%] bg-gradient-to-br from-[#111] to-black relative min-h-[300px] md:min-h-full">
                                <img src={selectedMember.image} alt={selectedMember.name} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-transparent to-transparent md:to-[#0a0a0a]" />
                            </div>

                            {/* Right Side: Content */}
                            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
                                <div className="mb-8">
                                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">{selectedMember.name}</h3>
                                    <div className="h-1 w-20 bg-[#ff5500] mb-6" />
                                    <p className="text-[#ff5500] font-black text-xs md:text-sm tracking-[0.3em] uppercase mb-8">{selectedMember.role}</p>
                                </div>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-white/70 leading-relaxed font-sans text-base md:text-lg italic mb-6">"{selectedMember.partialBio}"</p>
                                    <p className="text-white/50 leading-relaxed font-sans text-sm md:text-base">{selectedMember.fullBio}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
