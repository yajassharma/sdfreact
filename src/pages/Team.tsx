import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Team() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-left">
                <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 group"><ArrowLeft size={20} /> Back to Home</Link>
                <h1 className="heading-epic mb-6 text-white">THE <span className="italic" style={{ fontFamily: "'Cormorant SC', serif", color: "#E6C9A8" }}>entire</span> <span className="text-gradient-live">SQUAD</span></h1>
                <p className="text-xl text-white/70 max-w-3xl">Meet the leadership team behind SDF Go Live.</p>
            </div>
        </main>
    );
}
