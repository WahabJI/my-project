import React from 'react'
import { useState } from 'react';
interface componentProps {
    isClicked: boolean;
}

function company2(){
    // const [isHidden, setIsHidden] = useState(!props.isClicked);

    return(
    <div className={`w-3/4 h-auto ml-16 pl-16 pt-4 `} >
        <div className={`bg-white rounded-md p-4 transform transition-all duration-500`}>
            <p className="text-lg font-bold">Job Title 2</p>
            <p className="text-sm font-medium">Company Name 2 | Location 2 | Start Date 2 - End Date 2</p>
            <p className="max-w-md">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </p>
        </div>
    </div>
    );
}

export default company2;