import React from 'react';

import Button from '../../Atoms/Button';
import H2 from '../../Atoms/H2';
import Li from '../../Atoms/Li';

const Objectives = () => (
    <div className="w-full h-full bg-blue-700 py-12 px-8 flex">
        <div className=" my-auto">
            <H2 text="YISS has an objective to:" textColor=" text-white "/>
            <ul className="sm:pl-4">
                <Li text="Capacity building of young health science researchsers" />
                <Li text="Attract young scientists to the field of research" />
                <Li text="Provide mentorship to young inexperienced researchers" />
                <Li text="Promote collaboration and mutual assistance between early career researchers" />
                <Li text="Contribute to the larger public through proactive acts of health education" />
                <Li text="Attract funding for research projects" />
            </ul>
            <div className="mt-8">
                <Button text="Learn More" btnColor="white" />
            </div>
        </div>
    </div>
);

export default Objectives;