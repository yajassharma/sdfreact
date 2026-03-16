import Features from '../components/Features';
import CreatorEconomy from '../components/CreatorEconomy';
import PartyRoom from '../components/PartyRoom';
import AgencySection from '../components/AgencySection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import ScrollyDragon from '../components/ScrollyDragon';
import TeamSection from '../components/TeamSection';
import CurvedLoop from '../components/CurvedLoop';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div className="w-full">
            <Navbar />
            <ScrollyDragon />
            <div className="relative z-40 bg-[#0e0e0e] rounded-t-[3rem] md:rounded-t-[6rem] shadow-[0_-50px_100px_rgba(0,0,0,0.9)] -mt-[120vh] border-t border-white/10 min-h-screen">
                <Features />
                <CurvedLoop />
                <CreatorEconomy />
                <PartyRoom />
                <AgencySection />
                <TeamSection />
                <DownloadSection />
                <Footer />
            </div>
        </div>
    );
}
