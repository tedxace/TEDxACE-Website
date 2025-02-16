"use client"

import { useEffect, useRef } from 'react'
// import { Button } from "@/components/ui/button"
import LandingPage from './LandingPage'
import Speakers from './Speakers'
import Venue from './Venue'
import VideoElement from './VideoElement'
import Lenis from 'lenis'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Sponsors from './Sponsors'


const Home = () => {
  const lenisRef = useRef<Lenis>(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <>
      <LandingPage />
      <Speakers />
      <Venue />
      <VideoElement />
      <Sponsors/>
    </>
  )
}

export default Home