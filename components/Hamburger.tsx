import React from 'react';

export const Hamburger = () => {
    const Open = (e: any) => {
        const ham = document.getElementById("hammm");
        ham!.classList.toggle("w-[100%]");
    }
    const Close = (e: any) => {
        const ham = document.getElementById("hammm");
        ham!.classList.toggle("w-[100%]");
    }
    return(
        <>
        <div className="fixed top-0 right-2 cursor-pointer">
            <button onClick={Open} type="button" className="bg-transparent p-2 rounded-md text-gray-800 hover:text-gray-900">
                    <svg
                className="inline-block w-14 h-14 text-gray-500 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>
            </button>
        </div>
        <nav id="hammm" className="fixed w-0 h-screen bg-cblue flex justify-center items-center overflow-hidden z-50 origin-left duration-500">
            <ul className="grid grid-rows-4 gap-0 mr-4 text-xl font-bold">
                <li>
                    <a onClick={Close} href="#home"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Home</a>
                </li>
                
                <li>
                    <a onClick={Close} href="#projects"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Projects</a>
                </li>

                <li>
                    <a onClick={Close} href="#experience"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Experience</a>
                </li>

                <li>
                    <a onClick={Close} href="#"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Contact Me</a>
                </li>
            </ul>
            <div className=" absolute top-2 right-2 cursor-pointer">
                <button onClick={Close} type="button" className="bg-transparent p-2 rounded-md text-gray-800 hover:text-gray-900">
                    <svg
                        className="inline-block w-14 h-14 text-gray-500 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

        </nav>
    </>
    );
}



















































// import React, {useState} from 'react';

// export const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//     return(
//         <nav className="flex flex-col md:flex-row">
//             <div className="ml-auto md:mr-4">
//                 <div className="md:hidden flex items-center">
//                     <button type="button" className="bg-transparent px-3 py-2 rounded-md text-gray-800 hover:text-gray-900" onClick={toggleMenu}>
//                         <svg
//                         className="inline-block w-6 h-6 text-gray-500 transition-colors duration-200"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                         >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M4 6h16M4 12h16M4 18h16"
//                         />
//                         </svg>
//                     </button>
//                 </div>

//                 <ul className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:justify-between md:pt-0 md:pb-0 md:bg-transparent md:w-auto text-xl font-bold`}>
//                     <li>
//                         <a href="#home" className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">
//                         Home
//                         </a>
//                     </li>

//                     <li>
//                         <a href="#projects" className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">
//                         Projects
//                         </a>
//                     </li>

//                     <li>
//                         <a href="#experience" className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">
//                         Experience
//                         </a>
//                     </li>

//                     <li>
//                         <a href="#" className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">
//                         Contact Me
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
    
//     );
// }
