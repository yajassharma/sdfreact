"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CookiesPage() {
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
                            Cookie <span className="italic" style={{ color: "#E6C9A8" }}>policy</span>
                        </h1>
                        <div className="w-20 h-px bg-gradient-to-r from-[var(--color-accent-blue)] to-transparent" />
                    </header>

                    <div className="space-y-16 text-white/60 font-sans leading-relaxed text-lg">
                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">1. What are Cookies?</h2>
                            <p>
                                Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, keep you logged in, and understand how people use our platform so we can make it better.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">2. How We Use Cookies</h2>
                            <p className="mb-6">
                                We use cookies for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>
                                    <strong className="text-white/80">Authentication:</strong> To identify you when you visit our website and navigate through it.
                                </li>
                                <li>
                                    <strong className="text-white/80">Security:</strong> To protect your account and the platform from unauthorized access and fraud.
                                </li>
                                <li>
                                    <strong className="text-white/80">Performance:</strong> To analyze how our services are used, which helps us optimize the platform experience.
                                </li>
                                <li>
                                    <strong className="text-white/80">Preferences:</strong> To remember your settings such as language or display preferences.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">3. Managing Cookies</h2>
                            <p className="mb-6">
                                Most web browsers allow you to control cookies through their settings. You can:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Delete all cookies from your device</li>
                                <li>Block cookies from being set</li>
                                <li>Set your browser to notify you when a cookie is issued</li>
                            </ul>
                            <p className="mt-6 italic text-sm">
                                Note: Blocking all cookies may impact your ability to use certain features of the platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-medium mb-6 tracking-wide uppercase font-bebas">4. Third-Party Cookies</h2>
                            <p>
                                Some third-party services we use (like analytics or social media integrations) may also set their own cookies. We do not control these cookies, and we recommend checking the respective third-party websites for more information.
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
