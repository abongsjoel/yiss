import React from 'react';

import Hero from '../Organisms/Hero';

import Aux from '../hoc/Auxilary';

const AboutUsPage = () => (
    <Aux>
        <Hero />
        <div className="flex justify-center font-bold text-4xl py-8">
            <p>Hello and Welcome. <br /><br />This is the about us page</p>
        </div>
    </Aux>   
);

export default AboutUsPage;