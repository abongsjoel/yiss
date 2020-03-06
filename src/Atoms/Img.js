import React from 'react';

const Img = ({src, alt, styles}) => (
    <img 
        src={src} 
        alt={alt} 
        className={"w-full h-full object-cover " +styles} 
    />
);


export default Img;