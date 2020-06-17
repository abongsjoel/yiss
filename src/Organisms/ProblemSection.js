import React from 'react';

import Message from './Message/Message';
import Problem from '../Molecules/Specific/Problem';

import problem from '../assets/images/problem.png';

const ProblemSection = () => (
    <div className="tj-container">
        <Message 
            headingpart1="The "
            headingpart2="Problem"
            content={<Problem />} 
            imgSrc={problem}
            imgAlt="Welcome to YISS"
        />
    </div>
);

export default ProblemSection;