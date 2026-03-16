import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Cookies() {
    return (
        <div className="min-h-screen bg-[#050505] flex flex-col">
            <main className="flex-1 pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Back to Home */}
                    <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-16 group transition-colors uppercase text-[10px] tracking-[0.2em] font-bold">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>

                    {/* Header */}
                    <div className="mb-20">
                        <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-4">
                            Cookie <span className="italic font-light text-[#E6C9A8] lowecase mx-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>&</span> Usage
                        </h1>
                        <div className="w-24 h-[2px] bg-red-600" />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-16 text-left">
                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">WHAT ARE COOKIES?</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>Cookies are small text files stored on your device that help websites recognize you and remember your preferences. They are essential for a seamless user experience.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">HOW WE USE COOKIES</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>We use cookies to maintain your login session, remember your language preferences, and analyze platform traffic to provide better content recommendations.</p>
                                <p>Essential cookies are required for the security and basic functionality of the SDF Go Live platform.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">TYPES OF COOKIES</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <ul className="list-disc pl-5 space-y-4">
                                    <li><strong>Security Cookies:</strong> To identify and prevent security risks.</li>
                                    <li><strong>Performance Cookies:</strong> To monitor system speed and stability.</li>
                                    <li><strong>Functional Cookies:</strong> To remember your personalized settings.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">MANAGING YOUR PREFERENCES</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>You can manage or disable cookies through your browser settings. Please note that disabling essential cookies may impact your ability to use certain features on our platform.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
