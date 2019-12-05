import React from 'react';

const Img = ({src, alt, styles}) => {
    return (
        <img src={src} alt={alt} className={"object-cover w-full h-full " +styles} />
    );
    
}

export default Img;