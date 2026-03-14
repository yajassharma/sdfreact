"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-black">
            {/* Background Glows - Subtle */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[var(--color-accent-purple)] opacity-5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[var(--color-accent-blue)] opacity-5 blur-[120px] rounded-full" />
            </div>

            <div className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-20 group text-sm uppercase tracking-widest font-sans">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <header className="mb-20">
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                            Privacy <span className="italic" style={{ color: "#E6C9A8" }}>policy</span>
                        </h1>
                        <div className="w-20 h-px bg-gradient-to-r from-[var(--color-accent-blue)] to-transparent" />
                    </header>

                    <div className="space-y-16 text-white/60 font-sans leading-relaxed text-lg">
                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">1. Information We Collect</h2>
                            <p className="mb-6">
                                We collect information you provide directly to us when you create an account, go live, or communicate with us.
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Profile details (Name, username, email)</li>
                                <li>Streaming data and uploaded content</li>
                                <li>Payment information for creator earnings</li>
                                <li>Device information and IP addresses</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">2. How We Use Information</h2>
                            <p className="mb-6">
                                We use the information we collect to provide, maintain, and improve our services, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Personalizing your experience on the platform</li>
                                <li>Processing transactions and withdrawals</li>
                                <li>Detecting and preventing fraudulent activity</li>
                                <li>Communicating with you about updates and support</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">3. Data Sharing</h2>
                            <p>
                                We do not sell your personal data. We share information with third-party providers only as necessary to provide our services (e.g., payment processors) or when required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">4. Data Security</h2>
                            <p>
                                We implement robust technical and organizational measures to protect your data. However, no internet-based service can be 100% secure, and we encourage users to use strong passwords.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">5. Your Rights</h2>
                            <p>
                                You have the right to access, update, or delete your personal information. You can manage most of these settings directly within your profile or by contacting our compliance team.
                            </p>
                        </section>

                        <div className="pt-16 border-t border-white/5 text-xs text-white/30 tracking-widest uppercase">
                            Last Updated: March 2024
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
