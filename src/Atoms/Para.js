import React from 'react';

const Para = ({text, fontSize, fontColor}) => {
    return (
        <p className={fontSize + " " + fontColor}>{text}</p>
    );
}

export default Para;