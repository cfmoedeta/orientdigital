import About from "@/components/About";
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
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="services">
        <WhatWeDo />
      </SectionWrapper>
      <SectionWrapper>
        <Numbers />
      </SectionWrapper>
      <SectionWrapper id="talents">
        <ManagedTalents />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
      <Footer />
    </>
  );
}
