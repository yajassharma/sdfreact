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
                <div className="grid grid-cols-2 gap-8 text-left">
                    <div>
                        <h4 className="font-bold mb-4 text-white/90">Support</h4>
                        <ul className="space-y-4 text-sm text-white/50 font-sans">
                            <li><span className="text-[10px] text-white/30 uppercase block mb-1">General Support</span><a href="mailto:support@sdfgolive.com">support@sdfgolive.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white/90">Legal</h4>
                        <ul className="space-y-2 text-sm text-white/50 font-sans">
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs text-white/30">&copy; {new Date().getFullYear()} SDF GO LIVE. All rights reserved.</div>
        </footer>
    );
}
