import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ManagedTalents from "@/components/ManagedTalents";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import WhatWeDo from "@/components/WhatWeDo";
import SectionWrapper from "@/components/wrappers/section-wrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper>
        <WhatWeDo />
      </SectionWrapper>
      <SectionWrapper>
        <Numbers />
      </SectionWrapper>
      <SectionWrapper>
        <ManagedTalents />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
      <Footer />
    </>
  );
}
