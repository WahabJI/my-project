import React from "react";

interface ExperienceSectionProps {
    myElementRef2: React.MutableRefObject<null>;
    myElementRef3: React.MutableRefObject<null>;
    isVisible2: boolean;
    isVisible3: boolean;
}

export const ExperienceSection = (props: ExperienceSectionProps) => {
    return(
        <section id="experience" className="bg-gradient-to-b from-indigo-500 to-purple-500 min-h-screen flex flex-col overflow-x-hidden">
            <h1 className="text-center text-6xl font-bold text-beige my-8">Experience</h1>
            <div className="grid grid-cols-11 grid-rows-4 pb-32 pt-8">
              
              <div className="col-span-5 flex justify-end items-center" ref={props.myElementRef2}>
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible2 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible2? 'delay-100' : ''} `}>
                  {/* Content goes here */}
                  
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent py-0.5">Plug Power</h1>
                  <h2 className="text-gray-700 text-xl italic">Software Engineering Intern</h2>
                  <div className="text-lg">
                    <p>I am currently developing a web app for seamless data entry, manipulation and comprehensive project management. It is currently slated to seamlessly integrate with PowerBI for powerful data visualization capabilities.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className={`bg-white shadow-lg rounded-full transition-all duration-500 delay-100 z-50 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` } ><div className="bg-gradient-to-tl shadow-lg from-indigo-500 to-violet-300 w-1/2 h-1/2 rounded-lg rotate-45"><div className="bg-violet-500/80 w-full h-full animate-ping rounded-lg"/></div></div>
                <div className="absolute w-2 h-72 bg-white my-2 rounded-full"></div> 
              </div>
                  
              <div className="flex justify-start col-span-5 items-center">
                  <p className={`text-beige text-center text-3xl ${!props.isVisible2 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible2? 'delay-100' : ''}`}>
                    February 2023 - Present
                  </p>
              </div>


              <div className="col-span-5 flex justify-end items-center">
                <p className={`text-beige text-center text-3xl ${!props.isVisible2 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible2? 'delay-300' : ''}`}>
                  January 2023 - May 2023
                </p>
              </div>

              <div className="flex justify-center items-center">
                <div className={`bg-white shadow-lg rounded-full transition-all duration-500 delay-100 z-50 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` } ></div>
                <div className="absolute w-2 h-80 bg-white my-2 rounded-full"></div> 
              </div>

              <div className="col-span-5 flex justify-start items-center">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible2 ? ' translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible2? 'delay-300' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent py-0.5">University of Houston | Computer Science Department</h1>
                  <h2 className="text-gray-700 text-xl italic">Academic Support Assistant</h2>
                  <div className="text-lg">
                    <p>I worked with the course intructor to deliver impactful instructions to over 150 students. I also held dedicated office hours to provide constructive feedback and comprehensive code reviews to ensure continuous growth.</p>
                  </div>
                </div>
              </div>


              {/* ---------------------------------------SECOND HALF------------------------------------------------------------------------------------------------------------ */}


              
              <div className="col-span-5 flex justify-end items-center">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible3 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible3? 'delay-300' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent py-0.5" ref={props.myElementRef3}>DM Clinical Research</h1>
                  <h2 className="text-gray-700 text-xl italic">IT Intern</h2>
                  <div className="text-lg">
                    <p>Together with the IT team, we deployed a streamlined ticketing system that significantly improved issue resolution efficiency. Additionally, I played a crucial role in facilitating the smooth onboarding of over 30 new employees each month, while providing exceptional level 1 technical support.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className={`bg-white shadow-lg rounded-full transition-all duration-500 delay-100 z-50 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` } ></div>
                <div className="absolute w-2 h-80 bg-white my-2 rounded-full"></div> 
              </div>

              <div className="col-span-5 flex justify-start items-center">
                <p className={`text-beige text-center text-3xl ${!props.isVisible3 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible3? 'delay-300' : ''}`}>
                  September 2022 - December 2022
                </p>
              </div>

              <div className="col-span-5 flex justify-end items-center">
                <p className={`text-beige text-center text-3xl ${!props.isVisible3 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible3? 'delay-500' : ''}`}>
                  April 2021 - August 2022
                </p>
              </div>

              <div className="flex justify-center items-center">
                <div className={`bg-white shadow-lg rounded-full transition-all duration-500 delay-100 z-50 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` } ></div>
                <div className="absolute w-2 h-72 bg-white my-2 rounded-full"></div> 
              </div>

              <div className="col-span-5 flex justify-start items-center">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible3 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible3? 'delay-500' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent py-0.5" ref={props.myElementRef3}>The UPS Store #6735</h1>
                  <h2 className="text-gray-700 text-xl italic">Centre Manager</h2>
                  <div className="text-lg">
                    <p>Led operations, fostering vendor relationships and ensuring customer satisfaction during a seamless franchise transition. I also played a key role in team recruitment and management to drive outstanding results.</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </section>
    );
}
