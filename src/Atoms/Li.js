import React from 'react';

// import Aux from '../hoc/Auxilary';

import pointerIcon from '../assets/icons/pointer-icon.png';

const Li = ({text}) => (
    <div>
        <img className="inline px-1" src={pointerIcon} alt=">" />
        <li className="inline text-xs text-gray-400 tracking-wider">{text}</li>
    </div>
);

export default Li;