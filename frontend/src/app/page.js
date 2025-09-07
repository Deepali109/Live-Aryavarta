import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularSites from "@/components/PopularSites";
import OurServices from "@/components/OurServices";
import SectionBasedInterest from "@/components/SectionWithInterest";
import ExploreStates from "@/components/SectionWithState";
import TopPlaces from '@/components/TopVisitedPlaces'
const Home = () => {
  return (
    <>
      <div className="w-screen min-h-screen overflow-hidden">
        <Navbar />
        <HeroSection />
        <OurServices />
        <PopularSites />
        <SectionBasedInterest />
        <ExploreStates />
        <TopPlaces/>
      </div>
    </>
  );
};

export default Home;
