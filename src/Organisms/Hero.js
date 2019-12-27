import React from 'react';

import Img from '../Atoms/Img';
// import HeroMessage from '../Molecules/HeroMessage';

import HeroImg from '../assets/images/hero-img.jpg';
// import HeroLogo from '../assets/logo/hero-logo.png';
// import Aux from '../hoc/Auxilary';

const Hero = () => (
    // <div className="relative flex justify-center items-center">
    //     <Img 
    //         src={HeroImg} 
    //         alt="Hero Image"
    //         styles="h-300 lg:h-auto"
    //     />
    //     <div className="absolute">
    //         <HeroMessage 
    //             src={HeroLogo}
    //             alt="Young investor's Science Society"
    //             txt="BE INNOVATIVE, BE DIFFERENT"
    //         />
    //     </div>
    // </div>
    <div className="relative bg-red-500 pb-full sm:pb-2/3 md:pb-1/2 xl:pb-1/3">
        <Img 
            src={HeroImg} 
            alt="Hero Image"
            // styles="h-300 lg:h-auto"
        />
    </div>
);

export default Hero;