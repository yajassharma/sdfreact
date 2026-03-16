import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Privacy() {
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
                            Privacy <span className="italic font-light text-[#E6C9A8] lowecase mx-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>&</span> Policy
                        </h1>
                        <div className="w-24 h-[2px] bg-red-600" />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-16 text-left">
                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">1. INFORMATION COLLECTION</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>We collect information that you provide directly to us, including your name, email address, profile picture, and payment information when you register or use our gifting features.</p>
                                <p>We also automatically collect technical data such as your IP address, device type, and usage patterns to improve our service security and performance.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">2. DATA USAGE</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>Your data is used to provide and personalize our services, facilitate virtual gifting transactions, and communicate important updates regarding the platform.</p>
                                <p>We use analytics to understand user behavior and optimize the platform's features for a better streaming experience.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">3. SECURITY MEASURES</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>We implement robust security protocols to protect your personal information from unauthorized access, alteration, or disclosure.</p>
                                <p>End-to-end encryption is used for sensitive transactions, and we regularly audit our systems for vulnerabilities.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">4. THIRD-PARTY DISCLOSURE</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>We do not sell your personal data to third parties. We may share data with trusted service providers who assist us in platform operations under strict confidentiality agreements.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">5. YOUR RIGHTS</h2>
                            <div className="space-y-6 text-white/50 font-sans leading-relaxed text-base">
                                <p>You have the right to access, correct, or delete your personal data. You can manage your privacy settings within the application or contact our support team for assistance.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
