import React from 'react';

interface ExperienceSectionProps {
    myElementRef: React.MutableRefObject<null>;
    isVisible: boolean;
}

export const ProjectSection = (props: ExperienceSectionProps) => {
    return (
        <section id="projects" className="bg-gradient-to-b from-sky-500 to-indigo-500 min-h-screen md:h-screen">
          <div className="h-1/6 items-center flex justify-center">
            <h1 className="text-6xl font-title font-bold text-beige">Projects</h1>
          </div>
            <div className="my-auto items-center flex h-5/6">

              <div className="flex flex-wrap my-16 md:space-x-12 space-y-12 md:space-y-0 mx-auto justify-center" ref={props.myElementRef}>
                <div className={`bg-white rounded-lg shadow-md p-4 w-72 h-72 md:w-96 w-72 h-80 md:h-96 transform transition-all duration-500 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-300`}>
                  {/* Card content goes here */}
                  <h1 className="text-center text-lg md:text-2xl bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent">StudyUP</h1>

                  <div className="flex justify-center items-center mt-4">
                    <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
                  </div>

                  <p className="px-4 mt-4 text-justify text-sm md:text-lg">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>


                <div className={`bg-white rounded-lg shadow-md p-4 w-72 h-72 md:w-96 w-72 h-80 md:h-96 transform transition-all duration-500 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-500`}>
                  {/* Card content goes here */}
                  <h1 className="text-center text-lg md:text-2xl bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent">Fuel Quoter / Dunya</h1>

                  <div className="flex justify-center items-center mt-4">
                    <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
                  </div>

                  <p className="px-4 mt-4 text-justify text-sm md:text-lg">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>


                <div className={`bg-white rounded-lg shadow-md p-4 w-72 h-72 md:w-96 w-72 h-80 md:h-96 transform transition-all duration-500 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-700`}>
                  {/* Card content goes here */}
                  <h1 className="text-center text-lg md:text-2xl bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent">This Website!</h1>

                  <div className="flex justify-center items-center mt-4">
                    <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
                  </div>

                  <p className="px-4 mt-4 text-justify text-sm md:text-lg">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              </div>
          </section>
    );
    };

