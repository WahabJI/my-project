import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRef, useState, useEffect } from 'react';
import {ProjectSection} from '../components/sections/ProjectSection';
import {HomeSection} from '../components/sections/HomeSection';
import {ExperienceSection} from '../components/sections/ExperienceSection';
import {ContactSection} from '../components/sections/ContactSection';
import { ExperienceSectionResponsive } from '@/components/sections/ExperienceSectionResponsive';
function isElementVisible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.bottom >= 0 && rect.top <= windowHeight;
}

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const myElementRef = useRef(null);
  const myElementRef2 = useRef(null);
  const myElementRef3 = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (myElementRef.current && isElementVisible(myElementRef.current)) {
        setIsVisible(true);
        console.log("projects visible")
      }

      if (myElementRef2.current && isElementVisible(myElementRef2.current)) {
        setIsVisible2(true);
        console.log("experience first half visible")
      }

      if (myElementRef3.current && isElementVisible(myElementRef3.current)) {
        setIsVisible3(true);
        console.log("experience second half visible")
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1024); // Set breakpoint for small screens
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Wahab Javed</title>
        <meta name="Personal Portfolio Website" content="Made by Wahab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rubik.png" />
      </Head> 
      <main className="">
        {/* HOME SECTION */}
        <HomeSection/>
        
        {/* PROJECTS SECTION */}
        <ProjectSection isVisible={isVisible} myElementRef={myElementRef} />

        {/* EXPERIENCE SECTION */}
        {isSmallScreen?
          <ExperienceSectionResponsive isVisible2={isVisible2} isVisible3={isVisible3} myElementRef2={myElementRef2} myElementRef3={myElementRef3} /> : 
          <ExperienceSection isVisible2={isVisible2} isVisible3={isVisible3} myElementRef2={myElementRef2} myElementRef3={myElementRef3} /> 
          
          }
        <ContactSection />
      </main>
    </>
  )
}


// COOL CSS STUFF
{/* transform transition-all duration-500 translate-y-10 opacity-0 hover:translate-y-0 hover:opacity-100 */}