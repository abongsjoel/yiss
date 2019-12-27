import React from 'react';

import H1 from '../Atoms/H1';
import Button from '../Atoms/Button';
import Img from '../Atoms/Img';

const Message = ({headingpart1, headingpart2, content, imgSrc, imgAlt}) => (
    <div className="my-8 w-full">
        <H1 part1={headingpart1} part2={headingpart2} />
        <div className="w-full mt-4 flex flex-col md:flex-row md:justify-between">
            <div className="border-t mb-8 md:mb-0 md:w-1/2 md:mr-4 ">
                {content}
                <div className="mt-8">
                    <Button text="Learn More" btnColor="blue" />
                </div>
            </div>
            <div className="md:w-1/2 md:ml-4">
                <div className="relative pb-full sm:pb-3/4 md:pb-0 md:h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl"> 
                    <Img 
                        src={imgSrc} 
                        alt={imgAlt}
                        styles=" absolute"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Message;