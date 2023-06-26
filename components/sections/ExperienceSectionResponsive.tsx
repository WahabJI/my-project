import React from "react";

interface ExperienceSectionProps {
    myElementRef2: React.MutableRefObject<null>;
    myElementRef3: React.MutableRefObject<null>;
    isVisible2: boolean;
    isVisible3: boolean;
}

export const ExperienceSectionResponsive = (props: ExperienceSectionProps) => {
    return(
        <section id="experience" className="bg-gradient-to-b from-indigo-500 to-purple-500 min-h-1/2">
            <div className="flex justify-center items-center pt-4">
                <h1 className="text-center text-4xl font-bold text-beige">Experience</h1>
            </div>
            

            <div className="grid grid-cols-12 px-4 py-16">
                <div className="flex justify-center items-center col-span-2">
                    <div className="absolute w-6 h-6 bg-white rounded-full"></div> {/* Timeline dot */}
                    <div className="w-2 h-[110%] bg-white my-2 rounded-full"></div>
                </div>
                <div className="bg-white p-4 shadow-md min-h-40 rounded-xl col-span-10">
                    <h2 className="text-lg font-bold">Plug Power <span className="text-gray-900 font-normal">| February 2023 - Present</span></h2>
                    <p className="text-gray-700 italic">Software Engineering Intern</p>
                    <p className="">I am currently developing a web app for seamless data entry, manipulation and comprehensive project management. It is currently slated to seamlessly integrate with PowerBI for powerful data visualization capabilities.</p>
                </div>
                <div className="flex justify-center items-center col-span-2">
                    <div className="absolute w-6 h-6 bg-white rounded-full"></div> {/* Timeline dot */}
                    <div className="w-2 h-[110%] bg-white my-2 rounded-full"></div>
                </div>
                <div className="bg-white p-4 shadow-md min-h-40 mt-4 rounded-xl col-span-10">
                    <h2 className="text-lg font-bold">UH Computer Science Department <span className="text-gray-900 font-normal">| January 2023 - May 2023</span></h2>
                    <p className="text-gray-700">Academic Support Assistant</p>
                    <p className="">I worked with the course intructor to deliver impactful instructions to over 150 students. I also held dedicated office hours to provide constructive feedback and comprehensive code reviews to ensure continuous growth.</p>
                </div>
                <div className="flex justify-center items-center col-span-2">
                    <div className="absolute w-6 h-6 bg-white rounded-full"></div> {/* Timeline dot */}
                    <div className="w-2 h-[110%] bg-white my-2 rounded-full"></div>
                </div>
                <div className="bg-white p-4 shadow-md min-h-40 mt-4 rounded-xl col-span-10">
                    <h2 className="text-lg font-bold">DM Clinical Research <span className="text-gray-900 font-normal">| September 2022 - December 2022</span></h2>
                    <p className="text-gray-700">IT Intern</p>
                    <p className="">Together with the IT team, we deployed a streamlined ticketing system that significantly improved issue resolution efficiency. Additionally, I played a crucial role in facilitating the smooth onboarding of over 30 new employees each month, while providing exceptional level 1 technical support.</p>
                </div>
                <div className="flex justify-center items-center col-span-2">
                    <div className="absolute w-6 h-6 bg-white rounded-full"></div> {/* Timeline dot */}
                    <div className="w-2 h-[110%] bg-white my-2 rounded-full"></div>
                </div>
                <div className="bg-white p-4 shadow-md min-h-40 mt-4 rounded-xl col-span-10">
                    <h2 className="text-lg font-bold">The UPS Store #6735 <span className="text-gray-900 font-normal">| April 2021 - August 2022</span></h2>
                    <p className="text-gray-700">Center Manager</p>
                    <p className="">Led operations, fostering vendor relationships and ensuring customer satisfaction during a seamless franchise transition. I also played a key role in team recruitment and management to drive outstanding results.</p>
                </div>
                {/* Add more job cards as needed */}
            </div>
        </section>

    );
}
