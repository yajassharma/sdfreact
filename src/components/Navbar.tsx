import { motion } from "framer-motion";

export default function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <nav className="fixed top-6 left-9 z-[100] pointer-events-none">
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="pointer-events-auto group flex items-center overflow-hidden transition-all"
            >
                <img src="/logo.png" alt="SDF Logo" className="w-full h-28 object-contain" />

            </motion.button>
        </nav>
    );
}
