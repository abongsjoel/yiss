import React from 'react';

const GaleryImg = ({src, alt, styles}) => (
    <a href={src}>
        <img 
            src={src} 
            alt={alt} 
            className={"w-full h-full object-cover " +styles} 
        />
    </a>
);


export default GaleryImg;