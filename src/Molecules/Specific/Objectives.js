import React from 'react';

import H2 from '../../Atoms/H2';
import Li from '../../Atoms/Li';

import Aux from '../../hoc/Auxilary';

const Objectives = () => (
    <Aux>
        <H2 text="YISS has an objective to:" styles=" text-white mb-4 "/>
        <ul className="sm:pl-4">
            <Li text="Capacity building of young health science researchsers" />
            <Li text="Attract young scientists to the field of research" />
            <Li text="Provide mentorship to young inexperienced researchers" />
            <Li text="Promote collaboration and mutual assistance between early career researchers" />
            <Li text="Contribute to the larger public through proactive acts of health education" />
            <Li text="Attract funding for research projects" />
        </ul>
    </Aux>
);

export default Objectives;