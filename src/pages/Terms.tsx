import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Terms() {
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
                            Terms <span className="italic font-light text-[#E6C9A8] lowecase mx-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>&</span> Conditions
                        </h1>
                        <div className="w-24 h-[2px] bg-red-600" />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-16 text-left">
                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">1. INTRODUCTION</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>Welcome to SDF Go Live. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.</p>
                                <p>SDF Go Live is owned and operated by Sahil Kumar Singh. Our mission is to provide a premium live streaming destination for creators in India and beyond.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">2. USE OF SERVICE</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>You must be at least 18 years old to use this service. You agree to use the service only for lawful purposes and in accordance with these Terms.</p>
                                <p>Every user is responsible for the content they broadcast. SDF Go Live maintains a zero-tolerance policy for illegal, harmful, or abusive content.</p>
                                <p>We reserve the right to suspend or terminate accounts that violate our community standards or engage in fraudulent activities.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">3. CREATOR ACCOUNTS</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>Creators must provide accurate information when signing up for an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
                                <p>Unauthorized use of your account must be reported to our support team immediately. We are not liable for any losses caused by unauthorized access to your account.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">4. INTELLECTUAL PROPERTY</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>All content on the platform, including logos, text, graphics, and software, is the property of SDF Go Live or its content suppliers and is protected by international copyright laws.</p>
                                <p>By streaming on SDF Go Live, you grant us a non-exclusive, royalty-free license to use, host, and display your content for the purpose of operating and promoting the platform.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">5. LIMITATION OF LIABILITY</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>SDF Go Live shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the platform.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
