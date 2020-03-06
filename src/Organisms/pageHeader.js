import React from 'react';

import Img from '../Atoms/Img'

const PageHeader = ({ pageName, headerImage }) => (
    <div className="relative pb-2/5 md:pb-1/5 ">
    {/* <div className="relative pb-1/5 sm:pb-1/10 md:pb-1/10 xl:pb-1/10"> */}
        <Img 
            src={headerImage} 
            alt="Young investor's Science Society" 
            styles="  object-bottom absolute"  
        />
        <div className="absolute flex h-full w-full items-center hm_bg-black tj-container">
            <p className="pt-2 text-white hero-font font-bold text-3xl sm:text-4xl md:text-5xl">
            {/* <p className="pt-2 text-white hero-font font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl"> */}
                {pageName}
            </p>
        </div>
    </div>
);

export default PageHeader;