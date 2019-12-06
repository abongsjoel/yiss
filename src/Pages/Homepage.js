import React from 'react';

import Hero from '../Organisms/Hero';
import WelcomeMessage from '../Organisms/WelcomeMessage';
import ObjectivesSection from '../Organisms/ObjectivesSection';
import ProblemSection from '../Organisms/ProblemSection';


import Aux from '../hoc/Auxilary';

const Homepage = () => (
    <Aux>
        <Hero />
        <WelcomeMessage />
        <ObjectivesSection />
        <ProblemSection />
    </Aux>   
);

export default Homepage;