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
            <h1 className="text-center text-6xl font-bold text-beige mt-16">Experience</h1>
            <div className="grid grid-cols-11 grid-rows-4 pb-32">
              
              <div className="col-span-5 mt-24 flex justify-end" ref={props.myElementRef2}>
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible2 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible2? 'delay-100' : ''} `}>
                  {/* Content goes here */}
                  
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent">Company Name</h1>
                  <h2 className="text-gray-700 text-xl">Postion Name 1</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    
                  </ul>
                </div>
              </div>
              
              {/* <div className="bg-green-500 rounded-full w-6 h-6"><div className="bg-green-500 rounded-full w-6 h-6 animate-ping"></div></div> */}
              {/* MIDDLE LINE */}
              <div className="col-span-1 row-span-4 flex justify-center">
                <div className="flex justify-center items-center absolute">
                  <div className="mt-16 h-[1400px] bg-white w-[10px] rounded-lg"></div>
                </div>
                <div className={`bg-white shadow-lg rounded-full mt-[115px] absolute transition-all duration-500 delay-100 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` } ><div className="bg-gradient-to-tl shadow-lg from-indigo-500 to-violet-300 w-1/2 h-1/2 rounded-lg rotate-45"><div className="bg-violet-500/80 w-full h-full animate-ping rounded-lg"/></div></div>
                <div className={`bg-white shadow-lg rounded-full mt-[465px] absolute transition-all duration-500 delay-300 ${props.isVisible2? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` }><div className="bg-gradient-to-tl shadow-lg from-indigo-500 to-violet-300 w-1/2 h-1/2 rounded-lg rotate-45"></div></div>
                <div className={`bg-white shadow-lg rounded-full mt-[810px] absolute transition-all duration-500 delay-200 ${props.isVisible3? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` }><div className="bg-gradient-to-tl shadow-lg from-indigo-500 to-violet-300 w-1/2 h-1/2 rounded-lg rotate-45"></div></div>
                <div className={`bg-white shadow-lg rounded-full mt-[1158px] absolute transition-all duration-500 delay-[400ms] ${props.isVisible3? 'h-16 w-16 opacity-1' : 'h-4 w-4 opacity-0.5'} flex justify-center items-center` }><div className="bg-gradient-to-tl shadow-lg from-indigo-500 to-violet-300 w-1/2 h-1/2 rounded-lg rotate-45"></div></div>
              </div>
                  
              <div className="flex justify-start col-span-5 mt-24">
                <div className="hidden sm:block">
                  <p className={`text-beige text-center text-2xl mt-7 ${!props.isVisible2 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible2? 'delay-100' : ''}`}>
                    Month Year - Month Year
                  </p>
                  </div>
              </div>


              <div className="col-span-5 mt-24 flex justify-end">
                <p className={`text-beige text-center text-2xl mt-7 ${!props.isVisible2 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible2? 'delay-300' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>

              <div className="col-span-5 mt-24 flex justify-start">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible2 ? ' translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible2? 'delay-300' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent">Company Name</h1>
                  <h2 className="text-gray-700 text-xl">Postion Name 1</h2>
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


              
              <div className="col-span-5 mt-24 flex justify-end">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible3 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible3? 'delay-300' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent" ref={props.myElementRef3}>Company Name</h1>
                  <h2 className="text-gray-700 text-xl">Postion Name 1</h2>
                  <ul className="text-lg">
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li className="">lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  </ul>
                </div>
              </div>
                  
              <div className="col-span-5 mt-24 flex justify-start">
                <p className={`text-beige text-center text-2xl mt-7 ${!props.isVisible3 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible3? 'delay-300' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>

              <div className="col-span-5 mt-24 flex justify-end">
                <p className={`text-beige text-center text-2xl mt-7 ${!props.isVisible3 ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-transform duration-500 ${props.isVisible3? 'delay-500' : ''}`}>
                  Month Year - Month Year
                </p>
              </div>

              <div className="col-span-5 mt-24 flex justify-start">
                <div className={`bg-white w-[500px] min-h-44 rounded-lg shadow-md p-6 transform transition-all duration-500 ${!props.isVisible3 ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} ${props.isVisible3? 'delay-500' : ''} `}>
                  {/* Content goes here */}
                  <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-violet-300 bg-clip-text text-transparent" ref={props.myElementRef3}>Company Name</h1>
                  <h2 className="text-gray-700 text-xl">Postion Name 1</h2>
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
