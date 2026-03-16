import { motion } from "framer-motion";

export default function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <nav className="fixed top-4 left-4 md:top-6 md:left-9 z-[100] pointer-events-none">
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="pointer-events-auto group flex items-center overflow-hidden transition-all active:scale-95"
            >
                <img
                    src="/logo.png"
                    alt="SDF Logo"
                    className="h-10 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
            </motion.button>
        </nav>
    );
}
