import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FeaturedEvent from "./components/sections/FeaturedEvent";
import TopPackages from "./components/sections/TopPackages";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import HowItWorks from "./components/sections/HowItWorks";
import SampleItinerary from "./components/sections/SampleItinerary";
import AddOnsSection from "./components/sections/AddOnsSection";
import LeadFormSection from "./components/sections/LeadFormSection";
import Footer from "./components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedEvent />
        <TopPackages />
        <WhyChooseUs />
        <HowItWorks />
        <SampleItinerary />
        <AddOnsSection />
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
