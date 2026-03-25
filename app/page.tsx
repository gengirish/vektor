import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import GatewayStory from "@/components/sections/GatewayStory";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyDharwad from "@/components/sections/WhyDharwad";
import Process from "@/components/sections/Process";
import CTABand from "@/components/sections/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <GatewayStory />
      <Stats />
      <Services />
      <WhyDharwad />
      <Process />
      <CTABand />
      <Footer />
    </>
  );
}
