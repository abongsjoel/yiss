import React from 'react';

const Para = ({text, styles}) => {
    return (
        <p className={"text-gray-700 text-justify " +styles}>{text}</p>
    );
}

export default Para;