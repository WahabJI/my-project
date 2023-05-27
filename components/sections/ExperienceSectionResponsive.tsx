import React from "react";

interface ExperienceSectionProps {
    myElementRef2: React.MutableRefObject<null>;
    myElementRef3: React.MutableRefObject<null>;
    isVisible2: boolean;
    isVisible3: boolean;
}

export const ExperienceSectionResponsive = (props: ExperienceSectionProps) => {
    return(
        <section id="experience" className="bg-gradient-to-b from-indigo-500 to-purple-500 min-h-screen">
            <div className="flex justify-center items-center pt-4">
                <h1 className="text-center text-4xl font-bold text-beige">Experience</h1>
            </div>
            
            <div className="flex justify-center items-start mt-8 h-full">
                <div className="w-1/5 px-4 pb-4">
                    <div className="flex flex-col items-center">
                        <div className="flex px-4 h-40 justify-center items-center">
                            <div className="w-6 h-6 bg-white rounded-full"></div> {/* Timeline dot */}
                            <div className="absolute w-2 h-40 bg-white my-2 rounded-full"></div> 
                        </div>
                        <div className="flex px-4 mt-4 h-40 justify-center items-center">
                            <div className="w-6 h-6 bg-white rounded-full"></div> {/* Timeline dot */}
                            <div className="absolute w-2 h-52 bg-white my-2 rounded-full"></div> 
                        </div>
                        <div className="flex px-4 mt-4 h-40 justify-center items-center">
                            <div className="w-6 h-6 bg-white rounded-full"></div> {/* Timeline dot */}
                            <div className="absolute w-2 h-52 bg-white my-2 rounded-full"></div> 
                        </div>
                        <div className="flex px-4 mt-4 h-40 justify-center items-center">
                            <div className="w-6 h-6 bg-white rounded-full"></div> {/* Timeline dot */}
                            <div className="absolute w-2 h-40 bg-white my-2 rounded-full"></div> 
                        </div>
                        {/* Add more timeline dots and lines as needed */}
                    </div>
                </div>
                
                <div className="w-4/5 px-4">
                    <div className="bg-white p-4 shadow-md h-40 rounded-xl">
                        <h2 className="text-lg font-bold">Job Title <span className="text-gray-500 font-normal">| Date</span></h2>
                        <p className="text-gray-600">Job Description</p>
                        <p className="text-gray-600">lorem ipsum delor</p>
                    </div>
                    <div className="bg-white p-4 shadow-md h-40 mt-4 rounded-xl">
                        <h2 className="text-lg font-bold">Job Title</h2>
                        <p className="text-gray-600">Job Description</p>
                        <p className="text-gray-600">lorem ipsum delor</p>
                    </div>
                    <div className="bg-white p-4 shadow-md h-40 mt-4 rounded-xl">
                        <h2 className="text-lg font-bold">Job Title</h2>
                        <p className="text-gray-600">Job Description</p>
                        <p className="text-gray-600">lorem ipsum delor</p>
                    </div>
                    <div className="bg-white p-4 shadow-md h-40 mt-4 rounded-xl">
                        <h2 className="text-lg font-bold">Job Title</h2>
                        <p className="text-gray-600">Job Description</p>
                        <p className="text-gray-600">lorem ipsum delor</p>
                    </div>
                {/* Add more job cards as needed */}
                </div>
            </div>
        </section>

    );
}
