import React from 'react';

// import bullets from '../assets/icons/left-arrow.svg';

const BulletPoint = ({text}) => (
    <div className="my-3 lg:my-4 flex">
        {/* <img className="px-1 h-4 " src={bullets} alt=">" /> */}
          <li className="text-xs text-gray-700 tracking-wider ">{text}</li>
    </div>
);

export default BulletPoint;