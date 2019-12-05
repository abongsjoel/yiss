import React from 'react';

import Hero from '../Organisms/Hero';
import WelcomeMessage from '../Organisms/WelcomeMessage';


import Aux from '../hoc/Auxilary';

const Homepage = () => {
    return (
        <Aux>
            <Hero />
            <WelcomeMessage />
        </Aux>   
    );
}

export default Homepage;