"use client";

import Link from "next/link";
import HeroSection from "./components/hero/hero";
import Onboard from "./components/onboard/onboard";
import Footer from "./components/footer/footer";



export default function Home() {
  return (
    <>
      <div className="">
        
        <HeroSection />
        <Onboard />
        <Footer />
      </div>
    </>
  );
}
