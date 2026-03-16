import { Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative z-20 border-t border-white/10 mt-20 pt-16 pb-8 px-4 md:px-8 bg-black/50 backdrop-blur-3xl overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10">
                <div className="max-w-xs text-left">
                    <h2 className="text-2xl font-black mb-4 tracking-widest uppercase text-gradient">SDF GO LIVE</h2>
                    <p className="text-sm text-white/50 mb-6 font-sans">India's Next Generation Live Streaming Platform. Connect with creators, discover communities, and build your kingdom.</p>
                    <div className="flex gap-4 text-white/40">
                        <a href="https://www.instagram.com/sdfgolive_official_site?igsh=OXowZHJkMHYwbmY4"><Instagram size={20} /></a>
                        <a href="https://www.facebook.com/share/1884JSbLPF"><Facebook size={20} /></a>
                        <a href="https://youtube.com/@sdfgolive"><Youtube size={20} /></a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    <div>
                        <h4 className="font-bold mb-6 text-white text-xl tracking-tight">Support</h4>
                        <ul className="space-y-6 text-sm font-sans text-left">
                            <li>
                                <span className="text-[10px] text-white/30 uppercase block mb-1 font-bold tracking-widest">General Support</span>
                                <a href="mailto:support@sdfgolive.com" className="text-white/60 hover:text-white transition-colors text-base">support@sdfgolive.com</a>
                            </li>
                            <li>
                                <span className="text-[10px] text-white/30 uppercase block mb-1 font-bold tracking-widest">Policy & Agency</span>
                                <a href="mailto:agencysupport@sdfgolive.com" className="text-white/60 hover:text-white transition-colors text-base">agencysupport@sdfgolive.com</a>
                            </li>
                            <li>
                                <span className="text-[10px] text-white/30 uppercase block mb-1 font-bold tracking-widest">Grievance</span>
                                <a href="mailto:contact@sdfgolive.com" className="text-white/60 hover:text-white transition-colors text-base">contact@sdfgolive.com</a>
                            </li>
                            <li>
                                <span className="text-[10px] text-white/30 uppercase block mb-1 font-bold tracking-widest">Compliance</span>
                                <a href="mailto:admin@sdfgolive.com" className="text-white/60 hover:text-white transition-colors text-base">admin@sdfgolive.com</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white/90 uppercase text-xs tracking-widest">Business</h4>
                        <ul className="space-y-3 text-sm text-white/50 font-sans">
                            <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                            <li><a href="https://forms.gle/SFxacYTAmRT4GuXq8" target="_blank" className="hover:text-white transition-colors">Agency Program</a></li>
                        </ul>
                    </div>
                    <div className="lg:text-right">
                        <h4 className="font-bold mb-4 text-white/90 uppercase text-xs tracking-widest">Legal</h4>
                        <ul className="space-y-3 text-sm text-white/50 font-sans">
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                <div className="font-sans">&copy; {new Date().getFullYear()} SDF GO LIVE. All rights reserved.</div>
                <div className="font-sans">
                    Made with <span className="text-red-500 mx-1">❤</span> by{" "}
                    <a
                        href="https://webchainit.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 hover:text-[var(--color-accent-orange)] transition-all font-bold"
                    >
                        WebChain IT
                    </a>
                </div>
            </div>
        </footer>
    );
}
