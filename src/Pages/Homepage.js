import React from 'react';

import Hero from '../Organisms/Hero';

import Aux from '../hoc/Auxilary';

const Homepage = () => {
    return (
        <Aux>
            <Hero />
            <h1 className="text-xl sm:text-3xl font-bold m-5">Hello and Welcome to the YISS HomePage</h1>
        </Aux>   
    );
}

export default Homepage;