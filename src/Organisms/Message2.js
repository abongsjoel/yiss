import React from 'react';

import Img from '../Atoms/Img';

const Message2 = ({imgSrc, imgAlt, content}) => (
    <div className="md:flex md:justify-between">
        <div className="hidden md:w-1/2 md:inline-block">
            <Img src={imgSrc} alt={imgAlt} />
        </div> 
        <div className="md:w-1/2">
            {content}
        </div>
        <div className="md:w-1/2 md:hidden">
            <Img src={imgSrc} alt={imgAlt} />
        </div> 
    </div>
);

export default Message2;