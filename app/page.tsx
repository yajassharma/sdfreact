import ScrollyDragon from "@/components/ScrollyDragon";
import Features from "@/components/Features";
import CreatorEconomy from "@/components/CreatorEconomy";
import PartyRoom from "@/components/PartyRoom";
import AgencySection from "@/components/AgencySection";
import TeamSection from "@/components/TeamSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ScrollyDragon />
      {/* Card stack: Deep overlap (-mt-[120vh]) allows it to slide UP from the bottom to cover the sticky hero */}
      <div className="relative z-40 bg-[#0e0e0e] rounded-t-[3rem] md:rounded-t-[6rem] shadow-[0_-50px_100px_rgba(0,0,0,0.9)] -mt-[120vh] border-t border-white/10 min-h-screen">
        <Features />
        <CreatorEconomy />
        <PartyRoom />
        <AgencySection />
        <TeamSection />
        <DownloadSection />
        <Footer />
      </div>
    </main>
  );
}
