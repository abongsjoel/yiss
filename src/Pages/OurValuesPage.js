import React from 'react';

import Hero from '../Organisms/Hero';

import Aux from '../hoc/Auxilary';

const OurValuesPage = () => (
    <Aux>
        <Hero />
        <div className="flex justify-center font-bold text-4xl py-8">
            <p>Hello and Welcome. <br /><br />This is the our values page</p>
        </div>
    </Aux>   
);

export default OurValuesPage;