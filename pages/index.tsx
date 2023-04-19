import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRef, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {ExperienceSection} from '../components/sections/ExperienceSection';
import {NavBar} from '../components/NavBar';
function isElementVisible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.bottom >= 0 && rect.top <= windowHeight;
}

export default function Home() {
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
      else{
        setIsVisible(false);
        console.log("projects not visible")
      }

      if (myElementRef2.current && isElementVisible(myElementRef2.current)) {
        setIsVisible2(true);
        console.log("experience first half visible")
      }
      // else{
      //   setIsVisible2(false);
      //   console.log("experience first half not visible")
      // }

      if (myElementRef3.current && isElementVisible(myElementRef3.current)) {
        setIsVisible3(true);
        console.log("experience second half visible")
      }
      // else{
      //   setIsVisible3(false);
      //   console.log("experience second half not visible")
      // }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Wahab Javed</title>
        <meta name="Personal Portfolio Website" content="Made by Wahab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* this main tag sets the background to be my custom blue color and then applies the background image */}
      <main className="">
          {/* <div> tag for the writing in the middle of the screen */}
          <section id="home"className="h-screen scroll-smooth bg-gradient-to-b from-cblue to-sky-500 flex flex-col items-center">
            <NavBar />
            <div className="flex items-center justify-center h-5/6">
              <h1 className="text-6xl font-title font-bold text-beige">Hi, I'm&nbsp; 
                <TypeAnimation
                  // Same String at the start will only be typed once, initially
                  sequence={[
                  'Wahab',
                  1000,
                  'وهب',
                  1000,
                  'ワハブ',
                  1000,
                  '瓦哈卜',
                  1000,
                  'вахаб',
                  1000,
                  ]}
                  speed={10} // Custom Speed from 1-99 - Default Speed: 40
                  deletionSpeed={40}
                  wrapper="span" // Animation will be rendered as a <span>
                  repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
              </h1>
            </div>

            <div className="justify-center relative -mt-80">
            {/* <div> tag for the icons at the bottom */}
              <div className="grid grid-cols-3 p-4 justify-items-center">

                <Link target="_blank" href="https://www.github.com/WahabJI">
                  <div className="flex justify-center items-center w-40 h-40 hover:bg-light-blue">
                    <Image 
                      src="/logo-github-light.svg" alt="Github Logo" width={40} height={40}
                      />
                  </div>
                </Link>

                <Link target="_blank" href="https://www.linkedin.com/in/wahab-javed/">
                  <div className="flex justify-center items-center w-40 h-40 hover:bg-light-blue">
                    <Image 
                      src="/logo-linkedin-light.svg" alt="Linkedin Logo" width={40} height={40}
                      />
                  </div>
                </Link>

                <Link target="_blank" href="/RESUME_WJ_01-20-2023.pdf">
                  <div className="flex justify-center items-center w-40 h-40 hover:bg-light-blue">
                    <Image 
                      src="/newspaper-outline-light.svg" alt="Resume Logo" width={40} height={40}
                      />
                  </div>
                </Link>
              </div>
            </div>

            <a href="#projects">
            <div className="arrow-container">
                <div id="arow" className="arrow"></div>
            </div>
            </a>       
          </section>

                  {/* transform transition-all duration-500 translate-y-10 opacity-0 hover:translate-y-0 hover:opacity-100 */}
          {/* PROJECTS SECTION */}
          <ExperienceSection isVisible={isVisible} myElementRef={myElementRef} />

          {/* EXPERIENCE SECTION --------------------------------------------------------------------------------------------------------------------------*/}
          <section id="experience" className="bg-gradient-to-b from-indigo-500 to-violet-300 min-h-screen flex flex-col overflow-x-hidden">
            <h1 className="text-center text-6xl font-title font-bold text-beige mt-16">Experience</h1>
            <div className="grid grid-cols-11 grid-rows-4 pb-32">
              
              <div className="col-span-5 mt-24 flex justify-end" ref={myElementRef2}>
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!isVisible2 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${isVisible2? 'delay-100' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent">Company Name</h1>
                  <h2 className="text-gray-700 text-xl">Postion Name 1</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  </ul>
                </div>
              </div>
              
              {/* <div className="bg-green-500 rounded-full w-6 h-6"><div className="bg-green-500 rounded-full w-6 h-6 animate-ping"></div></div> */}
              {/* MIDDLE LINE */}
              <div className="col-span-1 row-span-4 flex justify-center">
                <div className="flex justify-center items-center absolute">
                  <div className="mt-16 h-[1400px] bg-white w-[10px] rounded-lg"></div>
                </div>
                <div className={`bg-white rounded-full mt-[115px] absolute transition-all duration-500 ${isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} ${isVisible2? 'delay-100' : ''} flex justify-center items-center` }><div className="bg-green-500 rounded-full w-8 h-8 animate-ping transform transition duration-500"></div></div>
                <div className={`bg-white rounded-full mt-[465px] absolute transition-all duration-500 ${isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} ${isVisible2? 'delay-300' : ''}` }></div>
                <div className={`bg-white rounded-full mt-[810px] absolute transition-all duration-500 ${isVisible3? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} ${isVisible3? 'delay-3  300' : ''}` }></div>
                <div className={`bg-white rounded-full mt-[1158px] absolute transition-all duration-500 ${isVisible3? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} ${isVisible3? 'delay-500' : ''}` }></div>
              </div>
                  
              <div className="col-span-5 mt-24 flex justify-start">
                <p className={`text-beige text-center text-2xl mt-7 ${!isVisible2 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${isVisible2? 'delay-100' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>


              <div className="col-span-5 mt-24 flex justify-end">
                <p className={`text-beige text-center text-2xl mt-7 ${!isVisible2 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${isVisible2? 'delay-300' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>

              <div className="col-span-5 mt-24 flex justify-start">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!isVisible2 ? ' translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${isVisible2? 'delay-300' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent">Company Name</h1>
                  <h2 className="text-gray-700 text-xl">Postion Name 1</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  </ul>
                </div>
              </div>
              {/* ---------------------------------------------------------------------------------------------------- */}
              <div className="col-span-5 mt-24 flex justify-end">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!isVisible3 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${isVisible3? 'delay-300' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent" ref={myElementRef3}>Company Name</h1>
                  <h2 className="text-gray-700 text-xl">Postion Name 1</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  </ul>
                </div>
              </div>
                  
              <div className="col-span-5 mt-24 flex justify-start">
                <p className={`text-beige text-center text-2xl mt-7 ${!isVisible3 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${isVisible3? 'delay-300' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>

              <div className="col-span-5 mt-24 flex justify-end">
                <p className={`text-beige text-center text-2xl mt-7 ${!isVisible3 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${isVisible3? 'delay-500' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>

              <div className="col-span-5 mt-24 flex justify-start">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!isVisible3 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${isVisible3? 'delay-500' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent" ref={myElementRef3}>Company Name</h1>
                  <h2 className="text-gray-700 text-xl">Postion Name 1</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  </ul>
                </div>
              </div>
              
              
            </div>
          </section>
      </main>
    </>
  )
}