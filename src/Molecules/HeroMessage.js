import React from 'react';

import Img from '../Atoms/Img';

const HeroMessage = ({src, txt}) => {
    return (
        <div className="hm_bg w-3/4 m-auto py-4 md:w-full">
            <Img src={src} width="" />
            <p className="text-center pt-2 hero-font font-bold text-sm sm:text-2xl md:text-4xl lg:text-4xl">{txt}</p>
        </div>
    );  
}

export default HeroMessage;