import React from 'react';

import Message from './Message';
import MissionVision from '../Molecules/Specific/MissionVision';

import welcomeImg from '../assets/images/welcome.jpg';

const Welcome = () => (
    <div className="tj-container">
        <Message 
            headingpart1="Welcome to "
            headingpart2="YISS"
            content={<MissionVision />} 
            imgSrc={welcomeImg}
            imgAlt="Welcome to YISS"
        />
    </div>
);


export default Welcome;