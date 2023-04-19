import React from 'react';

interface ExperienceSectionProps {
    myElementRef: React.MutableRefObject<null>;
    isVisible: boolean;
}

export const ExperienceSection = (props: ExperienceSectionProps) => {
    return (
        <section id="projects" className="bg-gradient-to-b from-sky-500 to-indigo-500 h-screen flex flex-col items-center">
            <h1 className="text-center mt-16 text-6xl font-title font-bold text-beige">Projects</h1>
            <div className="my-auto">
              <div className="flex space-x-12 mx-auto mb-16" ref={props.myElementRef}>
                <div className={`bg-white rounded-lg shadow-md p-4 w-96 h-96 transform transition-all duration-500 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${props.isVisible? 'delay-300' : ''}`}>
                  {/* Card content goes here */}
                  <h1 className="text-center text-2xl bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent">StudyUP</h1>

                  <div className="flex justify-center items-center mt-4">
                    <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
                  </div>

                  <p className="px-4 mt-4 text-justify text-lg">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>


                <div className={`bg-white rounded-lg shadow-md p-4 w-96 min-h-96 transform transition-all duration-500 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${props.isVisible? 'delay-500' : ''}`}>
                  {/* Card content goes here */}
                  <h1 className="text-center text-2xl bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent">Fuel Quoter/Dunya</h1>

                  
                  <div className="flex justify-center items-center mt-4">
                    <hr className="border-gray-300 border-2 rounded-lg w-3/4" />
                  </div>
                  
                  <p className="px-4 mt-4 text-justify text-lg">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  {/* TEST LOGOS */}
                  {/* <div className="justify-end flex pt-6">
                    <Image className="mr-4" alt="test" src="/mongodb-ar21.svg" width={100} height={30}/>
                    <Image className="mr-4" alt="test" src="/Nextjs-logo.svg" width={100} height={30}/>
                    <Image alt="test" src="/Tailwind_CSS_Logo.svg" width={30} height={30}/>
                  </div> */}
                </div>


                <div className={`bg-white rounded-lg shadow-md p-4 w-96 min-h-96 transform transition-all duration-500 ${props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${props.isVisible? 'delay-700' : ''}`}>
                  {/* Card content goes here */}
                  <h1 className="text-center text-2xl bg-gradient-to-r from-cblue to-indigo-500 bg-clip-text text-transparent">This Website!</h1>

                  
                  <div className="flex justify-center items-center mt-4">
                    <hr className="border-gray-300 border-2 rounded-lg w-2/4" />
                  </div>
                  
                  <p className="px-4 mt-4 text-justify text-lg">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              </div>
          </section>
    );
    };

