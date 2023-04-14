import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
const inter = Inter({ subsets: ['latin'] })
import { useRef, useState, useEffect } from 'react';
import Job1 from '@/components/ExperienceExample';
import Job2 from '@/components/ExperienceExample2';
import { render } from 'react-dom'


function isElementVisible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.bottom >= 0 && rect.top <= windowHeight;
}

export default function Home() {
  const [buttonClicked, setButtonClicked] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const myElementRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (myElementRef.current && isElementVisible(myElementRef.current)) {
        setIsVisible(true);
        console.log("visible")
      }
      else{
        setIsVisible(false);
        console.log("not visible")
      }
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
        <div>
          {/* <div> tag for the writing in the middle of the screen */}
          <section id="home"className="h-screen scroll-smooth bg-gradient-to-b from-cblue to-sky-500 flex flex-col items-center">
            
            <div className="ml-auto">
              {/* Div tag for buttons in the top right */}
              <div className="grid grid-cols-4 gap-0 mr-4 text-xl font-bold">
                <div>
                  <a href="#home"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Home</a>
                </div>
                
                <div>
                  <a href="#"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">About Me</a>
                </div>

                <div>
                  <a href="#projects"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Projects</a>
                </div>

                <div>
                  <a href="#"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Contact Me</a>
                </div>
              </div>
            </div>
            
            
            
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
          <section id="projects" className="bg-gradient-to-b from-sky-500 to-indigo-500 h-screen flex flex-col items-center">
            <h1 className="text-center mt-16 text-6xl font-title font-bold text-beige">Projects</h1>
            <div className="my-auto">
              <div className="flex space-x-12 mx-auto mb-16" ref={myElementRef}>
                <div className={`bg-white rounded-lg shadow-md p-4 w-96 h-96 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isVisible? 'delay-300' : ''}`}>
                  {/* Card content goes here */}
                  <h1 className="text-center text-2xl bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent">StudyUP</h1>

                  <div className="flex justify-center items-center mt-4">
                    <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
                  </div>

                  <p className="px-4 mt-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className={`bg-white rounded-lg shadow-md p-4 w-96 min-h-96 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isVisible? 'delay-500' : ''}`}>
                  {/* Card content goes here */}
                  <h1 className="text-center text-2xl bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent">Fuel Quoter/Dunya</h1>

                  
                  <div className="flex justify-center items-center mt-4">
                    <hr className="border-gray-300 border-2 rounded-lg w-3/4" />
                  </div>
                  
                  <p className="px-4 mt-4 text-justify">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className={`bg-white rounded-lg shadow-md p-4 w-96 min-h-96 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isVisible? 'delay-700' : ''}`}>
                  {/* Card content goes here */}
                  <h1 className="text-center text-2xl bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent">This Website!</h1>

                  
                  <div className="flex justify-center items-center mt-4">
                    <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
                  </div>
                  
                  <p className="px-4 mt-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="bg-gradient-to-b from-indigo-500 to-violet-300 h-screen flex flex-col">
            <h1 className="text-center text-6xl font-title font-bold text-beige mt-2">Experience</h1>
            <div className="grid grid-cols-11 grid-rows-4">
              
              <div className="col-span-5 mt-24 h-16 flex justify-end">
                <div className="bg-white w-96 rounded-lg shadow-md p-4">
                  {/* Content goes here */}
                  test
                </div>
              </div>
              
              {/* MIDDLE LINE */}
              <div className="col-span-1 row-span-4 flex justify-center items-center">
                <div className="mt-24 h-[800px] bg-white w-[10px] rounded-lg"></div>
              </div>
                  
              <div className="col-span-5 w-24 h-24 mt-24">
                <div className="rounded-lg shadow-md p-4">
                  {/* Content goes here */}
                  <p className="text-beige text-center text-2xl">TEMP TEXT</p>
                </div>
              </div>

              <div className="col-span-5 mt-24 flex justify-end">
                <div className="w-24 h-24 rounded-lg shadow-md p-4">
                  {/* Content goes here */}
                  <p className="text-beige text-center text-2xl">TEMP TEXT</p>
                </div>
              </div>

              <div className="col-span-5 mt-24 flex justify-start">
                <div className="bg-white w-96 h-24 rounded-lg shadow-md p-4">
                  {/* Content goes here */}
                  test
                </div>
              </div>

              <div className="col-span-5 mt-24 flex justify-end">
                <div className="bg-white w-96 h-24 rounded-lg shadow-md p-4">
                  {/* Content goes here */}
                  test
                </div>
              </div>
                  
              <div className="col-span-5 w-24 h-24 mt-24">
                <div className="rounded-lg shadow-md p-4">
                  {/* Content goes here */}
                  <p className="text-beige text-center text-2xl">TEMP TEXT</p>
                </div>
              </div>

              <div className="col-span-5 mt-24 flex justify-end">
                <div className="w-24 h-24 rounded-lg shadow-md p-4">
                  {/* Content goes here */}
                  <p className="text-beige text-center text-2xl">TEMP TEXT</p>
                </div>
              </div>

              <div className="col-span-5 mt-24 flex justify-start">
                <div className="bg-white w-96 h-24 rounded-lg shadow-md p-4">
                  {/* Content goes here */}
                  test
                </div>
              </div>
              
              
            </div>
          </section>




          
        </div>
      </main>
    </>
  )
}


{/* <div className="flex flex-row justify-center my-auto">
              <div className="w-1/4 h-auto p-2 mr-12 pt-12">
                
                <div className="bg-white rounded-md p-2">
                  <button onClick={() => {
                    setButtonClicked(1); 
                    console.log(buttonClicked);
                    }} className="text-sm font-medium block w-full h-full">Company 1</button>
                </div>

                <div className="bg-white rounded-md p-2 mt-4">
                  <button onClick={() => {
                    setButtonClicked(2); 
                    console.log(buttonClicked);
                    }} className="text-sm font-medium block w-full h-full">Company 2</button>
                </div>

                <div className="bg-white rounded-md p-2 mt-4">
                  <p className="text-sm font-medium">Company 3</p>
                </div>
                <div className="bg-white rounded-md p-2 mt-4">
                  <p className="text-sm font-medium">Company 4</p>
                </div>
              </div>
              <div className="h-[600px] bg-gray-500 w-[5px] ml-0.5 rounded-lg"></div>
                {buttonClicked === 1 ? <Job1 isClicked={true}/> : <Job1 isClicked={false}/>}
                {buttonClicked === 2 ? <Job2 isClicked={true}/> : <Job2 isClicked={false}/>}
            </div> */}