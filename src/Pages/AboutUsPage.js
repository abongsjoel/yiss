import React from 'react';

import PageHeader from '../Organisms/pageHeader';

import Aux from '../hoc/Auxilary';

const AboutUsPage = () => (
    <Aux>
        <PageHeader pageName="About Yiss" />
        <div className="flex justify-center font-bold text-4xl py-8">
            <p>Hello and Welcome. <br /><br />This is the about us page</p>
        </div>
    </Aux>   
);

export default AboutUsPage;