import React from 'react';

interface ExperienceSectionProps {
  myElementRef: React.MutableRefObject<null>;
  isVisible: boolean;
}

export const ProjectSection = (props: ExperienceSectionProps) => {
  return (
    <section id="projects" className="bg-gradient-to-b from-sky-500 to-indigo-500 lg:h-screen">
      {/* div container for the title at the top */}
      <div className="flex justify-center items-center pt-4">
        <h1 className="text-4xl md:text-6xl text-beige font-bold">Projects</h1>
      </div>

      <div className="flex items-center my-auto h-5/6 overlfow-x-auto">
        <div className="flex flex-col lg:flex-row justify-center my-16 items-center mx-auto lg:space-x-6 xl:space-x-12 space-y-12 lg:space-y-0" ref={props.myElementRef}>

          {/* First div container */}
          <div className={`bg-white rounded-lg shadow-md w-5/6 h-fit md:w-2/3 lg:w-80 xl:w-1/5 p-4 transform transition-all duration-500 delay-300 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent text-center text-lg md:text-2xl ">StudyUP</h1>

            <div className="flex justify-center items-center mt-4">
              <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
            </div>

            <p className="text-sm md:text-lg px-4 mt-4">
              StudyUP was my first experience with the Discord API and TypeScript. It's a Discord bot that helps users create and track events, join study groups, and reserve study rooms at MD Anderson Library. The main goal of the bot is to assist students in staying organized and on top of their work by organizing events and study groups. This project was not only my first time working with others but also my first time working with these technologies, making it a valuable learning experience.
            </p>
            <div className="flex flex-wrap p-4">
              <img className="m-1" src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white"/>
              <img className="m-1" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/> 
              <img className="m-1" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
            </div>
          </div>

          {/* Second div container */}
          <div className={`bg-white rounded-lg shadow-md w-5/6 h-fit md:w-2/3 lg:w-80 xl:w-1/5 p-4 transform transition-all duration-500 delay-500 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent text-center text-lg md:text-2xl ">Fuel Quoter</h1>

            <div className="flex justify-center items-center mt-4">
              <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
            </div>

            <p className="text-sm md:text-lg px-4 mt-4">             
              Fuel Qouter marked one of my initial ventures into web development using NextJS. This web application offers fuel quotes to users by considering their location and past interactions with the company. The project provided a valuable opportunity for me to learn about backend development and the integration between frontend and backend components. Moreover, it served as a fantastic introduction to NextJS and TailwindCSS, further enriching my skillset in web development.
            </p>
            <div className="flex flex-wrap p-4">
              <img className="m-1" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
              <img className="m-1" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
              <img className="m-1" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/> 
            </div>
          </div>

          {/* Third div container */}
          <div className={`bg-white rounded-lg shadow-md w-5/6 h-fit md:w-2/3 lg:w-80 xl:w-1/5 p-4 transform transition-all duration-500 delay-700 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent text-center text-lg md:text-2xl ">This Website!</h1>

            <div className="flex justify-center items-center mt-4">
              <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
            </div>

            <p className="text-sm md:text-lg px-4 mt-4">
              Developing this website served as an opportunity for me to enhance my proficiency in front-end web development. My primary intention was to create a website that would challenge my design skills, which I had previously considered subpar. Throughout this project, I gained valuable insights into the significance of UI/UX and acquired the know-how to craft websites that are visually appealing and highly functional. Ultimately, it proved to be an immensely rewarding learning experience, and I am genuinely satisfied with the final outcome.
            </p>
            <div className="flex flex-wrap p-4">
              <img className="m-1" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
              <img className="m-1" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
              <img className="m-1" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/> 
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
};

