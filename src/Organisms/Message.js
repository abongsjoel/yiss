import React from 'react';

import H1 from '../Atoms/H1';
import MissionVision from '../Molecules/Specific/MissionVision';
import Button from '../Atoms/Button';
import Img from '../Atoms/Img';

import WelcomeImg from '../assets/images/welcome.jpg';

const Message = () => (
    <div className="my-8 w-full">
        <H1 part1="Welcome to " part2="YISS" />
        <div className="w-full mt-4 flex flex-col md:flex-row md:justify-between">
            <div className="border-t mb-8 md:mb-0 md:w-1/2">
                <MissionVision />
                <div className="mt-8">
                    <Button text="Learn More" btnColor="blue" />
                </div>
            </div>
            <div className="md:w-1/2">
                <div className="h-full md:ml-auto md:w-3/4"> 
                    <Img 
                        src={WelcomeImg} 
                        alt="Welcome to YISS"
                        styles=" rounded-lg shadow-lg hover:shadow-2xl"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Message;