import React from 'react';

import Objectives from '../Molecules/Objectives';
import Img from '../Atoms/Img';

import objectives from '../assets/images/objectives.png';
// import objectives2 from '../assets/images/objectives2.png';

const ObjectivesSection = () => (
    <div className="tj-container-big">
        <div className="md:flex md:justify-between">
            <div className="hidden md:w-1/2 md:inline-block">
                <Img src={objectives} alt="Objectives of YISS" />
            </div> 
            <div className="md:w-1/2">
                <Objectives />
            </div>
            <div className="md:w-1/2 md:hidden">
                <Img src={objectives} alt="Objectives of YISS" />
            </div> 
        </div>
    </div>
);

export default ObjectivesSection;