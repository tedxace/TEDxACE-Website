// @ts-nocheck

import { useEffect, useRef } from 'react'
// import { Button } from "@/components/ui/button"
import LandingPage from './LandingPage'
import Speakers from './Speakers'
import Venue from './Venue'
import VideoElement from './VideoElement'
import Lenis from 'lenis'
import Sponsors from './Sponsors'
import TitleSponsors from './TitleSponsors'


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

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(false);
  //   },4000)

    
  // },[])

  

  // if(loading){
  //   return (
  //     <div className='absolute h-screen w-full bg-black text-white flex flex-col items-center justify-center'>
  //     <p>Loading</p>
  //     </div>
  //   )
  // }
  return (
    <>
      <LandingPage />
      <Speakers />
      <TitleSponsors/>
      <VideoElement />
      <Venue />
      <Sponsors/>
    </>
  )
}

export default Home