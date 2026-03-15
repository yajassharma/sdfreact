import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CurvedLoop() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0e0e0e] to-transparent z-10" />

            <div className="flex flex-col items-center justify-center text-center px-4 mb-16 relative z-10">
                <h2 className="heading-epic mb-4 text-white">Infinite <span className="text-gradient-live">Vibes</span></h2>
                <p className="text-white/40 max-w-lg mx-auto font-sans tracking-widest text-xs uppercase">Join the loop of non-stop entertainment and connection.</p>
            </div>

            <div className="relative flex flex-col gap-8 opacity-40">
                <div className="flex gap-8 animate-infinite-scroll">
                    {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                        <div key={idx} className="w-64 h-80 rounded-3xl bg-white/5 border border-white/10 overflow-hidden shrink-0">
                            <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0e0e0e] to-transparent z-10" />
        </section>
    );
}
