import { motion } from "framer-motion";

const MarqueeItem = () => (
    <div className="flex items-center gap-8 px-4 whitespace-nowrap">
        <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#ff8c00]">India's</span>
        <ChakraIcon />
        <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">Next</span>
        <ChakraIcon />
        <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#228b22]">Generation</span>
        <ChakraIcon />
        <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#ff8c00]">Live</span>
        <ChakraIcon />
        <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">Streaming</span>
        <ChakraIcon />
        <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#228b22]">Platform</span>
        <ChakraIcon />
    </div>
);

const ChakraIcon = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" className="inline-block animate-spin-slow">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#000080" strokeWidth="8" />
        <circle cx="50" cy="50" r="10" fill="#000080" />
        {[...Array(24)].map((_, i) => (
            <line
                key={i}
                x1="50" y1="50"
                x2={50 + 40 * Math.cos((i * 15 * Math.PI) / 180)}
                y2={50 + 40 * Math.sin((i * 15 * Math.PI) / 180)}
                stroke="#000080"
                strokeWidth="2"
            />
        ))}
    </svg>
);

export default function CurvedLoop() {
    return (
        <section className="py-12 bg-black overflow-hidden relative border-y border-white/5 shadow-[0_0_50px_rgba(0,0,0,1)] gpu-accelerated">
            <div className="flex w-fit pointer-events-none">
                <motion.div
                    animate={{ x: [0, -50 + "%"] }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex shrink-0 gpu-accelerated"
                >
                    <MarqueeItem />
                    <MarqueeItem />
                    <MarqueeItem />
                    <MarqueeItem />
                </motion.div>
            </div>
        </section>
    );
}
