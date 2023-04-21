import React from 'react';

export const NavBar = () => {
    return(
    <nav className="flex">
        <div className="ml-auto">
            <ul className="grid grid-cols-4 gap-0 mr-4 text-xl font-bold">
                <li>
                    <a href="#home"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Home</a>
                </li>
                
                <li>
                    <a href="#projects"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Projects</a>
                </li>

                <li>
                    <a href="#experience"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Experience</a>
                </li>

                <li>
                    <a href="#"className="flex justify-center items-center w-40 h-14 hover:bg-light-blue/25 text-beige">Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}