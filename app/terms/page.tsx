"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
                            Terms <span className="italic" style={{ color: "#E6C9A8" }}>&</span> Conditions
                        </h1>
                        <div className="w-20 h-px bg-gradient-to-r from-[var(--color-accent-blue)] to-transparent" />
                    </header>

                    <div className="space-y-16 text-white/60 font-sans leading-relaxed text-lg">
                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">1. Introduction</h2>
                            <p className="mb-6">
                                Welcome to SDF Go Live. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.
                            </p>
                            <p>
                                SDF Go Live is owned and operated by KUMASINGH BIRPUR TECHNOLOGY PRIVATE LIMITED. Our mission is to provide a premium live streaming destination for creators in India and beyond.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">2. Use of Service</h2>
                            <p className="mb-6">
                                You must be at least 18 years old to use this service. You agree to use the service only for lawful purposes and in accordance with these Terms.
                            </p>
                            <p>
                                Every user is responsible for the content they broadcast. SDF Go Live maintains a zero-tolerance policy for illegal, harmful, or abusive content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">3. Creator Accounts</h2>
                            <p className="mb-6">
                                Creators must provide accurate information when signing up for an account. You are responsible for maintaining the confidentiality of your account credentials.
                            </p>
                            <p>
                                Earnings, gifts, and withdrawals are subject to our verification and security protocols to prevent fraud and ensure platform integrity.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">4. Intellectual Property</h2>
                            <p>
                                All content on this platform, including logos, graphics, and code, is the property of SDF Go Live or its licensors and is protected by intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">5. Termination</h2>
                            <p>
                                We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the platform.
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
