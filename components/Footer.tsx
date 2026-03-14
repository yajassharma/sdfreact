import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-20 border-t border-white/10 mt-20 pt-16 pb-8 px-4 md:px-8 bg-black/50 backdrop-blur-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent-purple)]/5 to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10">
                <div className="max-w-xs">
                    <h2 className="text-2xl font-black mb-4 tracking-widest uppercase text-gradient">SDF GO LIVE</h2>
                    <p className="text-sm text-white/50 mb-6">
                        India's Next Generation Live Streaming Platform. Connect with creators, discover communities, and build your kingdom.
                    </p>
                    <div className="flex gap-4 text-white/40">
                        <a href="https://www.instagram.com/sdfgolive_official_site?igsh=OXowZHJkMHYwbmY4" target="_blank" className="hover:text-[var(--color-accent-blue)] transition-colors"><Instagram size={20} /></a>
                        <a href="https://www.facebook.com/share/1884JSbLPF" target="_blank" className="hover:text-[var(--color-accent-blue)] transition-colors"><Facebook size={20} /></a>
                        <a href="https://youtube.com/@sdfgolive?si=w6qlleB_rtg8sDyP" target="_blank" className="hover:text-[var(--color-accent-blue)] transition-colors"><Youtube size={20} /></a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold mb-4 text-white/90">Support</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li>
                                <span className="text-[10px] text-white/30 uppercase block mb-1">General Support</span>
                                <a href="mailto:support@sdfgolive.com" className="hover:text-white transition-colors">support@sdfgolive.com</a>
                            </li>
                            <li>
                                <span className="text-[10px] text-white/30 uppercase block mb-1">Policy & Agency</span>
                                <a href="mailto:agencysupport@sdfgolive.com" className="hover:text-white transition-colors">agencysupport@sdfgolive.com</a>
                            </li>
                            <li>
                                <span className="text-[10px] text-white/30 uppercase block mb-1">Grievance</span>
                                <a href="mailto:contact@sdfgolive.com" className="hover:text-white transition-colors">contact@sdfgolive.com</a>
                            </li>
                            <li>
                                <span className="text-[10px] text-white/30 uppercase block mb-1">Compliance</span>
                                <a href="mailto:admin@sdfgolive.com" className="hover:text-white transition-colors">admin@sdfgolive.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-right md:text-left flex flex-col items-end md:items-start">
                        <h4 className="font-bold mb-4 text-white/90">Legal</h4>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs text-white/30 relative z-10">
                &copy; {new Date().getFullYear()} SDF GO LIVE. All rights reserved.
            </div>
        </footer>
    );
}
