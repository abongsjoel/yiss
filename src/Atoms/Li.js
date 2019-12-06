import React from 'react';

import pointers from '../assets/icons/pointers.png';

const Li = ({text}) => (
    <div className="my-3 lg:my-4 flex">
        <img className="px-1 h-4 " src={pointers} alt=">" />
          <li className="text-xs text-gray-400 tracking-wider ">{text}</li>
    </div>
);

export default Li;