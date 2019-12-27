import React from 'react';

import Img from '../Atoms/Img'

import HeroImage from '../assets/images/hero-img.jpg';
import HeroLogo from '../assets/logo/hero-logo.png';
// import Aux from '../hoc/Auxilary';

const Hero = () => (
    <div className="relative pb-full sm:pb-2/3 md:pb-1/2 xl:pb-2/5">
        <img 
            src={HeroImage} 
            alt="Young investor's Science Society" 
            className="absolute w-full h-full object-cover object-center"  
        />
        <div className="absolute flex h-full w-full items-center justify-center">
            <div className="hm_bg w-3/4 m-auto py-4">
                <Img src={HeroLogo} alt="Young investor's Science Society" />
                <p className="text-center pt-2 hero-font font-bold text-sm sm:text-2xl md:text-4xl lg:text-4xl">
                    BE INNOVATIVE, BE DIFFERENT
                </p>
            </div>
        </div>
    </div>
);

export default Hero;