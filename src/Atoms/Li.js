import React from 'react';

import pointers from '../assets/icons/pointers.png';
import logoPointer from '../assets/icons/logo-pointer.png';

const Li = ({text}) => (
    <div>
        <img className="inline px-1 h-4" src={pointers} alt=">" />
        <li className="inline text-xs text-gray-400 tracking-wider">{text}</li>
    </div>
);

export default Li;