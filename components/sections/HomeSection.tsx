import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { NavBar } from '../NavBar';
export const HomeSection = () => {
    return(
        <section id="home"className="h-screen scroll-smooth bg-gradient-to-b from-cblue to-sky-500">
            <NavBar />
            <div className="flex justify-center items-end h-3/6">
              <h1 className="text-4xl lg:text-6xl font-title font-bold text-beige">Hi, I'm&nbsp; 
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

            <div className="flex justify-center items-center h-2/6">
            {/* <div> tag for the icons at the bottom */}
              <div className="grid grid-cols-3 p-4">

                <Link target="_blank" href="https://www.github.com/WahabJI">
                  <div className="flex justify-center items-center w-20 h-20 lg:w-40 w-20 h-20 lg:h-40 hover:bg-light-blue">
                    <Image 
                      src="/logo-github-light.svg" alt="Github Logo" width={40} height={40}
                      />
                  </div>
                </Link>

                <Link target="_blank" href="https://www.linkedin.com/in/wahab-javed/">
                  <div className="flex justify-center items-center  w-20 h-20 lg:w-40 w-20 h-20 lg:h-40 hover:bg-light-blue">
                    <Image 
                      src="/logo-linkedin-light.svg" alt="Linkedin Logo" width={40} height={40}
                      />
                  </div>
                </Link>

                <Link target="_blank" href="/RESUME_WJ_01-20-2023.pdf">
                  <div className="flex justify-center items-center  w-20 h-20 lg:w-40 w-20 h-20 lg:h-40 hover:bg-light-blue">
                    <Image 
                      src="/newspaper-outline-light.svg" alt="Resume Logo" width={40} height={40}
                      />
                  </div>
                </Link>
              </div>
            </div>

            <a href="#projects" className="arrow-container">
              <div className="arrow"></div>
              <div className="arrow"></div>
              <div className="arrow"></div>  
            </a>      
          </section> 
    );
};