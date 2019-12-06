import React from 'react';

import Message2 from './Message2';

import Objectives from '../Molecules/Specific/Objectives';


import objectives from '../assets/images/objectives.png';
// import objectives2 from '../assets/images/objectives2.png';

const ObjectivesSection = () => (
    <div className="tj-container-big">
        <Message2 
            imgSrc={objectives}
            imgAlt="Objectives of YISS"
            content={<Objectives />}
            bgColor="bg-blue-700"
        />
    </div>
);

export default ObjectivesSection;