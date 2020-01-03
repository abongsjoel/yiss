import React, { useState } from 'react';

import Hero from '../Organisms/Hero';
import WelcomeMessage from '../Organisms/WelcomeMessage';
import ObjectivesSection from '../Organisms/ObjectivesSection';
import ProblemSection from '../Organisms/ProblemSection';
import GalarySection from '../Organisms/GalarySection';

import Modal from '../Atoms/Modal/Modal';


import Aux from '../hoc/Auxilary';

const Homepage = () => {

    const [showModal, setShowModal] = useState(false);
    return (
        <Aux>
            { showModal ? <Modal /> : null }
            <Hero />
            <WelcomeMessage />
            <ObjectivesSection />
            <ProblemSection />
            <GalarySection />
        </Aux>   
    );
}

export default Homepage;