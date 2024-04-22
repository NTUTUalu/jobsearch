'use client'


import Link from 'next/link';
import HeroSection from './components/hero/hero'
import Onboard from './components/onboard/onboard'
import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigation";



export default function Home() {
  return (
    <>
    
    <Navigation/>
     <HeroSection/>  
<Onboard/>
<Footer/>
  
    </>
  )
}