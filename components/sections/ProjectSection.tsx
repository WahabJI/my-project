import React from 'react';

interface ExperienceSectionProps {
  myElementRef: React.MutableRefObject<null>;
  isVisible: boolean;
}

export const ProjectSection = (props: ExperienceSectionProps) => {
  return (
    <section id="projects" className="bg-gradient-to-b from-sky-500 to-indigo-500 min-h-screen md:h-screen">
      {/* div container for the title at the top */}
      <div className="flex justify-center items-center h-1/6">
        <h1 className="text-6xl text-beige font-title font-bold">Projects</h1>
      </div>

      <div className="flex items-center my-auto h-5/6">
        <div className="flex flex-wrap justify-center my-16 mx-auto md:space-x-12 space-y-12 md:space-y-0" ref={props.myElementRef}>

          {/* First div container */}
          <div className={`bg-white rounded-lg shadow-md w-72 h-80 md:h-96 md:w-96 p-4 transform transition-all duration-500 delay-300 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent text-center text-lg md:text-2xl ">StudyUP</h1>

            <div className="flex justify-center items-center mt-4">
              <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
            </div>

            <p className="text-justify text-sm md:text-lg px-4 mt-4">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          {/* Second div container */}
          <div className={`bg-white rounded-lg shadow-md w-72 h-80 md:h-96 md:w-96 p-4 transform transition-all duration-500 delay-500 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent text-center text-lg md:text-2xl ">Fuel Quoter / Dunya</h1>

            <div className="flex justify-center items-center mt-4">
              <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
            </div>

            <p className="text-justify text-sm md:text-lg px-4 mt-4">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          {/* Third div container */}
          <div className={`bg-white rounded-lg shadow-md w-72 h-80 md:h-96 md:w-96 p-4 transform transition-all duration-500 delay-700 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent text-center text-lg md:text-2xl ">This Website!</h1>

            <div className="flex justify-center items-center mt-4">
              <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
            </div>

            <p className="text-justify text-sm md:text-lg px-4 mt-4">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

        </div>
      </div>
      
    </section>
  );
};

