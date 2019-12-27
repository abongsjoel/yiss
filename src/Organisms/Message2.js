import React from 'react';

import Img from '../Atoms/Img';
import Button from '../Atoms/Button';

const Message2 = ({imgSrc, imgAlt, content, bgColor}) => (
    <div className="md:flex md:justify-between">
        <div className="hidden md:w-1/2 md:inline-block">
            <Img src={imgSrc} alt={imgAlt} />
        </div> 
        <div className="md:w-1/2">
            <div className={"w-full h-full py-12 px-8 flex " +bgColor}>
                <div className=" my-auto">
                    {content}
                    <div className="mt-8">
                        <Button text="Learn More" btnColor="white" />
                    </div>
                </div>
            </div>
        </div>
        <div className="relative pb-full sm:pb-1/2 md:w-1/2 md:hidden">
            <Img src={imgSrc} alt={imgAlt} styles=" absolute" />
        </div> 
    </div>
);

export default Message2;