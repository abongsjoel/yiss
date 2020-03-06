import React from 'react';

import PageHeader from '../Organisms/pageHeader';

import Aux from '../hoc/Auxilary';

import HeaderImage from '../assets/images/about-1.jpg';

const AboutUsPage = () => (
    <Aux>
        <PageHeader pageName="About Yiss" headerImage={HeaderImage} />
        <div className="flex justify-center font-bold text-4xl py-8">
            <p>Hello and Welcome. <br /><br />This is the about us page</p>
        </div>
    </Aux>   
);

export default AboutUsPage;