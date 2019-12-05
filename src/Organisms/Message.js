import React from 'react';

import H1 from '../Atoms/H1';
import MissionVision from '../Molecules/Specific/MissionVision';
import Button from '../Atoms/Button';
import Img from '../Atoms/Img';

import WelcomeImg from '../assets/images/welcome.jpg';

const Message = () => {
    return (
        <div className="my-8 w-full">
            <H1 part1="Welcome to " part2="YISS" />
            <div className="w-full mt-4 flex flex-col lg:flex-row lg:justify-between">
                <div className="border-t mb-8 lg:mb-0 lg:w-1/2">
                    <MissionVision />
                    <div className="mt-8">
                        <Button text="Learn More" btnColor="blue" />
                    </div>
               </div>
                <div className="lg:w-1/2">
                    <div className="h-full lg:float-right lg:w-3/4"> 
                        <Img 
                            src={WelcomeImg} 
                            alt="Welcome to YISS"
                            styles=" rounded shadow-lg hover:shadow-2xl"
                        />
                    </div>
               </div>
                
                {/* <div className="flex-1 bg-gray-400 border-t c-border mt-4 pt-4   lg:pb-0 lg:pr-4 lg:mr-4 lg:w-1/2">
                    <MissionVision />
                    <div className="mt-8">
                        <Button text="Learn More" btnColor="blue" />
                    </div>
                </div>
                <div className="flex-1 bg-gray-400  mt-4 mb-8 shadow-2xl lg:ml-4 lg:w-1/2 lg:h-auto">
                    <Img 
                        src={WelcomeImg} 
                        alt="Welcome to YISS"
                    />
                </div> */}
            </div>
        </div>
    );
}

export default Message;