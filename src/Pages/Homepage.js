import React from 'react';

import Hero from '../Organisms/Hero';
import WelcomeMessage from '../Organisms/WelcomeMessage';
import ObjectivesSection from '../Organisms/ObjectivesSection';


import Aux from '../hoc/Auxilary';

const Homepage = () => (
    <Aux>
        <Hero />
        <WelcomeMessage />
        <ObjectivesSection />
    </Aux>   
);

export default Homepage;