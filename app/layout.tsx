import type { Metadata } from "next";
import { Montserrat, Bebas_Neue, Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "SDF Go Live | India's Next Generation Live Streaming Platform",
  description: "Stream. Connect. Earn. Where Creators Build Kingdoms.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${bebasNeue.variable} ${cormorant.variable} ${lato.variable} font-sans antialiased`}>
        <header className="fixed top-0 left-0 z-[100] p-6 md:p-10 pointer-events-none">
          <img src="/logo.png" alt="SDF Go Logo" className="w-12 md:w-15 pointer-events-auto" />
        </header>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
