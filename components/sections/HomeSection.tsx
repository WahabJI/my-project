import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { NavBar } from '../NavBar';
import { Hamburger } from '../Hamburger';
import React, {useState, useEffect} from 'react';
import { TypeAnimation } from 'react-type-animation';


export const HomeSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 900); // Set breakpoint for small screens
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return(
    <section id="home"className="bg-gradient-to-b from-cblue to-sky-500 h-screen">
      {/* Conditionally render which navbar is being rendered */}
      {isSmallScreen ? <Hamburger /> : <NavBar />}

      {/* DIV container for the typing animation in the middle of the screen */}
      <div className="flex justify-center items-end h-3/6">
        <h1 className="text-4xl lg:text-6xl text-beige font-bold">Hi, I'm&nbsp; 
          <TypeAnimation
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
            cursor={true} // Hide the Cursor
          />
        </h1>
      </div>
      
      {/* DIV container for the github, linkedin and resume button towards the bottom of the page */}
      <div className="flex justify-center items-center h-2/6">
        <div className="grid grid-cols-3 p-4">

          <Link target="_blank" href="https://www.github.com/WahabJI">
            <div className="flex justify-center items-center w-20 h-20 lg:w-40 lg:h-40 hover:bg-light-blue">
              <Image 
                src="/logo-github-light.svg" alt="Github Logo" width={40} height={40}
                />
            </div>
          </Link>

          <Link target="_blank" href="https://www.linkedin.com/in/wahab-javed/">
            <div className="flex justify-center items-center w-20 h-20 lg:w-40 lg:h-40 hover:bg-light-blue">
              <Image 
                src="/logo-linkedin-light.svg" alt="Linkedin Logo" width={40} height={40}
                />
            </div>
          </Link>

          <Link target="_blank" href="/RESUME_WJ_01-20-2023.pdf">
            <div className="flex justify-center items-center w-20 h-20 lg:w-40 lg:h-40 hover:bg-light-blue">
              <Image 
                src="/newspaper-outline-light.svg" alt="Resume Logo" width={40} height={40}
                />
            </div>
          </Link>

        </div>
      </div>
      
      {/* anchor tag for the arrow towards the bottom of the page */}
      <a href="#projects" className="arrow-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>  
      </a>      
    </section> 
  );
};