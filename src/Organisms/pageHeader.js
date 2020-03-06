import React from 'react';

import Img from '../Atoms/Img'

import HeroImage from '../assets/images/hero-img.jpg';

const PageHeader = () => (
    <div className="relative pb-1/5 sm:pb-1/10 md:pb-1/10 xl:pb-1/10">
    {/* <div className="relative pb-full sm:pb-2/3 md:pb-1/2 xl:pb-2/5"> */}
        <Img 
            src={HeroImage} 
            alt="Young investor's Science Society" 
            styles=" absolute"  
        />
        <div className="absolute flex h-full w-full items-center hm_bg-black tj-container">
            <p className="pt-2 text-white hero-font font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl">
                About YISS
            </p>
        </div>
    </div>
);

export default PageHeader;