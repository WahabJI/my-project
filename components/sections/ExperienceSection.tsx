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
                  
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent">Plug Power</h1>
                  <h2 className="text-gray-700 text-xl italic">Software Engineering Intern</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className={`bg-white shadow-lg rounded-full transition-all duration-500 delay-100 z-50 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` } ><div className="bg-gradient-to-tl shadow-lg from-indigo-500 to-violet-300 w-1/2 h-1/2 rounded-lg rotate-45"><div className="bg-violet-500/80 w-full h-full animate-ping rounded-lg"/></div></div>
                <div className="absolute w-2 h-72 bg-white my-2 rounded-full"></div> 
              </div>
                  
              <div className="flex justify-start col-span-5 items-center">
                  <p className={`text-beige text-center text-2xl ${!props.isVisible2 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible2? 'delay-100' : ''}`}>
                    Month Year - Month Year
                  </p>
              </div>


              <div className="col-span-5 flex justify-end items-center">
                <p className={`text-beige text-center text-2xl ${!props.isVisible2 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible2? 'delay-300' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>

              <div className="flex justify-center items-center">
                <div className={`bg-white shadow-lg rounded-full transition-all duration-500 delay-100 z-50 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` } ><div className="bg-gradient-to-tl shadow-lg from-indigo-500 to-violet-300 w-1/2 h-1/2 rounded-lg rotate-45"><div className="bg-violet-500/80 w-full h-full animate-ping rounded-lg"/></div></div>
                <div className="absolute w-2 h-80 bg-white my-2 rounded-full"></div> 
              </div>

              <div className="col-span-5 flex justify-start items-center">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible2 ? ' translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible2? 'delay-300' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent">University of Houston | Computer Science Department</h1>
                  <h2 className="text-gray-700 text-xl">Academic Support Assistant</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  </ul>
                </div>
              </div>


              {/* ---------------------------------------SECOND HALF------------------------------------------------------------------------------------------------------------ */}


              
              <div className="col-span-5 flex justify-end items-center">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible3 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible3? 'delay-300' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent" ref={props.myElementRef3}>DM Clinical Research</h1>
                  <h2 className="text-gray-700 text-xl">IT Intern</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className={`bg-white shadow-lg rounded-full transition-all duration-500 delay-100 z-50 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` } ></div>
                <div className="absolute w-2 h-80 bg-white my-2 rounded-full"></div> 
              </div>

              <div className="col-span-5 flex justify-start items-center">
                <p className={`text-beige text-center text-2xl ${!props.isVisible3 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible3? 'delay-300' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>

              <div className="col-span-5 flex justify-end items-center">
                <p className={`text-beige text-center text-2xl ${!props.isVisible3 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible3? 'delay-500' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>

              <div className="flex justify-center items-center">
                <div className={`bg-white shadow-lg rounded-full transition-all duration-500 delay-100 z-50 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` } ></div>
                <div className="absolute w-2 h-72 bg-white my-2 rounded-full"></div> 
              </div>

              <div className="col-span-5 flex justify-start items-center">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible3 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible3? 'delay-500' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent" ref={props.myElementRef3}>The UPS Store #6735</h1>
                  <h2 className="text-gray-700 text-xl">Centre Manager</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  </ul>
                </div>
              </div>
              
              
            </div>
          </section>
    );
}
