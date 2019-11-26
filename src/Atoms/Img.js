import React from 'react';

const Img = ({src, alt, width}) => {
    return (
        <img src={src} alt={alt} className={width} />
    );
    
}

export default Img;