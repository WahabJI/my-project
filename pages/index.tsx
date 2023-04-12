import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
          <section id="home"className="h-screen scroll-smooth bg-gradient-to-b from-cblue to-sky-500">
            
            <div className="flex relative justify-end">
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
            
            
            
            <div className="flex items-center justify-center relative h-screen">
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

            <div className="flex justify-center relative -mt-80">
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


          {/* PROJECTS SECTION */}
          <section id="projects" className=" bg-gradient-to-b from-sky-500 to-indigo-500 h-screen flex items-center mx-auto">
              <div className="flex justify-center space-x-12 mx-auto">
                <div className="bg-white rounded-lg shadow-md p-4 w-96 min-h-96">
                  {/* Card content goes here */}
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 w-96 min-h-96">
                  {/* Card content goes here */}
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 w-96 min-h-96 max-h-96">
                  {/* Card content goes here */}
                  test<br></br>
                  test<br></br>
                  test<br></br>
                </div>
              </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section className="bg-gradient-to-b from-indigo-500 to-violet-300 h-screen" hidden> // hidden attribute hides the section for now while working on the above section
          </section> 



          
        </div>
      </main>
    </>
  )
}
