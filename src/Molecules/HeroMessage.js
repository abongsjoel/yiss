import React from 'react';

import Img from '../Atoms/Img';

const HeroMessage = ({src, txt}) => {
    return (
        <div className="hm_bg flex flex-col items-center w-3/4" >
            <Img src={src} width="w-full" />
            {/* <p>{txt}</p> */}
        </div>
    );  
}

export default HeroMessage;