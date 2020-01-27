import React from 'react';

import Hero from '../Organisms/Hero';

import Aux from '../hoc/Auxilary';

const ContactUsPage = () => (
    <Aux>
        <Hero />
        <div className="flex justify-center font-bold text-4xl py-8">
            <p>Hello and Welcome. <br /><br />This is the contact us page</p>
        </div>
    </Aux>   
);

export default ContactUsPage;