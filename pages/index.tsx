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
      <main className="bg-blue bg-cover bg-blend-multiply bg-[url(/Seamless-Circuit-Board-Pattern.svg)]">
        <div>
          {/* <div> tag for the writing in the middle of the screen */}
          <section id="home"className="h-screen scroll-smooth">
            
            <div className="flex relative justify-end">
              {/* Div tag for buttons in the top right */}
              <div className="grid grid-cols-4 gap-0 mr-4 mt-0.5 text-xl font-bold">
                <div>
                  <a href="#home"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue text-beige">Home</a>
                </div>
                
                <div>
                  <a href="#"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue text-beige">About Me</a>
                </div>

                <div>
                  <a href="#projects"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue text-beige">Projects</a>
                </div>

                <div>
                  <a href="#"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue text-beige">Contact Me</a>
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
          
          <section>
            <div className="flex">

            </div>
          </section>


          {/* A div tag to place the follow text in the <p> below the vh of the screen using tailwindcss */}
          <section id="projects" className="backdrop-blur-sm h-screen flex items-center">

              <div className="flex flex-col gap-y-8 justify-center items-center">
                <h1 className="text-8xl text-beige">
                  Projects
                </h1>
              

              <div className="grid grid-cols-10 grid-rows-3 text-white mx-16 pt-28">
                  
                <div className="flex justify-center items-center w-100 h-100 col-span-1">
                  <Image 
                    src="/newspaper-outline-light.svg" alt="Linkedin Logo" width={200} height={200}
                    className="object-fill"
                    />
                </div>
                <p className="col-span-9 flex justify-center items-center hover:bg-light-blue leading-relaxed pl-8">2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Blandit libero volutpat sed cras ornare arcu dui. Elementum tempus egestas sed sed risus. Purus in massa tempor nec feugiat nisl pretium fusce id. Eget nunc scelerisque viverra mauris in aliquam sem. Adipiscing elit duis tristique sollicitudin. Congue eu consequat ac felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Pellentesque habitant morbi tristique senectus. Est placerat in egestas erat imperdiet sed euismod. Id eu nisl nunc mi ipsum. Integer eget aliquet nibh praesent tristique magna sit amet purus. Elementum eu facilisis sed odio morbi quis commodo odio. Mi quis hendrerit dolor magna.
                </p>
                <div className="flex justify-center items-center w-100 h-100 hover:text-beige col-span-1">
                    <Image 
                      src="/lofi-girl.gif" alt="Linkedin Logo" width={200} height={200}
                      className="object-fill"
                      />
                </div>
                <Link className="col-span-9 flex justify-center items-center hover:bg-light-blue pl-8" target="_blank" href="https://github.com/WahabJI/StudyUp/tree/main">
                  <p>
                    Utilized Typescript, Discord.js API, and MongoDB to implement a discord bot to create and keep track of events.
                    Optimized bot to allow students to create or view, participate, add events to their calendar and book study rooms in the University of Houston Library.
                    Helps to promote and organize group study sessions in student-run discord servers
                  </p>
                </Link>
                <div className="flex justify-center items-center w-100 h-100 col-span-1">
                    <Image 
                      src="/plane.ico" alt="Linkedin Logo" width={200} height={200}
                      className="object-fill"
                      />
                </div>
                <Link className="col-span-9 flex justify-center items-center hover:bg-light-blue pl-8" target="_blank" href="https://github.com/tachorzy/Dunya-Flight-Searcher">
                  <p> 
                  Created a website using Next.JS, TypeScript and Tailwind to implement a personalized flight searcher.
                  Included a Firebase Database to search Duffel API for flights and to display them to the user on the webpage based on user preferences such as, budget, activities, and other popular traveler factors.
                  </p>
                </Link>
                
              </div>
              </div>
          </section>
               



          
        </div>
      </main>
    </>
  )
}
