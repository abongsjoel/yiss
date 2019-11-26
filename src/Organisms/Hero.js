import React from 'react';

import Img from '../Atoms/Img';
import HeroMessage from '../Molecules/HeroMessage';

import HeroImg from '../assets/images/hero-img.jpg';
import HeroLogo from '../assets/logo/hero-logo.png';
import Aux from '../hoc/Auxilary';

const Hero = () => {
    return (
        <Aux>
        <div className="relative w-full bg-red-600 flex justify-center items-center">
            <Img 
                src={HeroImg} 
                alt="Hero Image"
            />
            <div className="absolute">
                <HeroMessage 
                    src={HeroLogo}
                    txt="BE INNOVATIVE, BE DIFFERENT"
                />
            </div>
        </div>
        </Aux>
    );
}

export default Hero;