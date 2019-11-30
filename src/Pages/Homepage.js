import React from 'react';

import Hero from '../Organisms/Hero';
import Welcome from '../Organisms/Welcome';


import Aux from '../hoc/Auxilary';

const Homepage = () => {
    return (
        <Aux>
            <Hero />
            <Welcome />
        </Aux>   
    );
}

export default Homepage;