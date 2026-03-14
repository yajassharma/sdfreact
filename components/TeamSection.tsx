"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowRight, X, Briefcase, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";

const teamMembers = [
    {
        name: "Sahil Kumar Singh",
        role: "Founder / Chairman",
        image: "/Sahil Kumar.png",
        partialBio: "Visionary leader setting the direction for SDFGoLive and associated technology ventures.",
        fullBio: "Sahil Kumar Singh is a visionary leader who serves as the Founder and Chairman of SDFGoLive and its associated ventures. He provides the overall strategic vision and direction for organizations including KUMASINGH BIRPUR TECHNOLOGY and Alien Technology Therapy Centre. His leadership focuses on business expansion, technological innovation, and major investment strategies to scale digital platforms into global ecosystems. By guiding management teams and fostering strategic partnerships, he maintains the brand's reputation while planning long-term growth and operational excellence.",
        details: {
            associated: [
                "KUMASINGH BIRPUR TECHNOLOGY PRIVATE LIMITED, Alien Technology Therapy Centre, SDFGoLive"
            ]
        },
        social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Ms. Pihu Singh",
        role: "Chief Executive Officer (CEO)",
        image: "/Pihu Singh.png",
        partialBio: "Leading the organization with strategic planning and professional oversight.",
        fullBio: "Ms. Pihu Singh serves as the Chief Executive Officer (CEO) of SDFGO Live, where she leads the entire organization with a focus on strategic planning and long-term business growth. She is responsible for final decision-making on major company matters and supervises the Managing Director and all departments to ensure operational alignment. Her role encompasses business development, policy creation, and financial oversight, representing the company in official capacities to ensure the sustained success and expansion of the platform.",
        social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Mr. Rahul Kumar Singh",
        role: "Managing Director (MD)",
        image: "/Rahul Kumar Singh.png",
        partialBio: "Overseeing company operations and ensuring strategic excellence across departments.",
        fullBio: "Mr. Rahul Kumar Singh is the Managing Director (MD) of SDFGO Live, overseeing the daily operations and implementing the business strategies set by the CEO. He leads senior management and department heads, ensuring that targets are met and policies are strictly followed. As a key decision-maker in operational issues, he coordinates closely with the CEO to report progress and handle complex management challenges, driving the company's growth through effective team leadership and strategic problem-solving.",
        social: { twitter: "#", linkedin: "#", github: "#" }
    }
];

export default function TeamSection() {
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
    const lenis = useLenis();

    // Lock body scroll and pause Lenis when modal is open
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = "hidden";
            lenis?.stop();
        } else {
            document.body.style.overflow = "unset";
            lenis?.start();
        }
        return () => {
            document.body.style.overflow = "unset";
            lenis?.start();
        };
    }, [selectedMember, lenis]);

    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
            <div className="text-center mb-16 relative z-10">
                <h2 className="heading-epic mb-6 leading-none text-white">
                    OUR <span className="italic px-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "#E6C9A8", textTransform: "lowercase", fontWeight: 300 }}>leadership</span>{" "}
                    <span className="text-gradient-live">BOARD</span>
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto font-sans">
                    Visionaries driving the technological landscape of SDF Go Live.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
                {teamMembers.map((member, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setSelectedMember(member)}
                        className="glass-card p-6 flex flex-col items-center text-center group cursor-pointer hover:border-[var(--color-accent-blue)]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(96,165,250,0.1)]"
                    >
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-[var(--color-accent-blue)] transition-colors duration-500">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-[var(--color-accent-orange)] font-medium mb-4 text-[10px] tracking-widest uppercase">
                            {member.role}
                        </p>
                        <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
                            {member.partialBio}
                        </p>
                        <button className="text-[var(--color-accent-blue)] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                            Executive Profile <ArrowRight size={12} />
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="text-center relative z-10">
                <Link href="/team">
                    <button className="bg-white text-black font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto uppercase tracking-widest text-xs">
                        View All Team <ArrowRight size={16} />
                    </button>
                </Link>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="relative w-full max-w-2xl max-h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
                        >
                            {/* Close button - more accessible on mobile */}
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-all active:scale-95"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8 md:mb-10 pt-4 md:pt-0">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[var(--color-accent-blue)]/30 shrink-0">
                                        <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{selectedMember.name}</h3>
                                        <p className="text-[var(--color-accent-orange)] font-bold text-xs md:text-sm tracking-widest uppercase">
                                            {selectedMember.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6 md:space-y-8">
                                    <div>
                                        <p className="text-white/80 text-sm md:text-base leading-relaxed font-sans">
                                            {selectedMember.fullBio}
                                        </p>
                                    </div>

                                    {selectedMember.details?.associated && (
                                        <div className="pt-0 border-t border-white/5">
                                            <h4 className="flex items-center gap-2 text-[10px] md:text-xs font-black text-white/30 uppercase mb-3 md:mb-4">
                                                <ShieldCheck size={14} /> Strategic Associations
                                            </h4>
                                            <ul className="space-y-3">
                                                {selectedMember.details.associated.map((item, i) => (
                                                    <li key={i} className="text-[10px] md:text-xs text-white/40 leading-tight bg-white/5 p-3 rounded-xl border border-white/5">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
