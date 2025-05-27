import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <Numbers />
    </>
  );
}
