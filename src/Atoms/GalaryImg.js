import React from 'react';

import classes from './GalaryImg.module.css';

const GaleryImg = ({src, alt, styles}) => (
    <a href={src}>
        <img 
            src={src} 
            alt={alt} 
            className={"w-full h-full object-cover " + classes.animate} 
        />
    </a>
);


export default GaleryImg;