import React from 'react';

const Img = ({src, alt, styles}) => (
    <img src={src} alt={alt} className={" object-cover w-full h-full object-center " +styles} />
);


export default Img;