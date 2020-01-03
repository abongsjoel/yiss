import React from 'react';

import Header from '../Organisms/Header';
import Footer from '../Organisms/Footer';

import Aux from '../hoc/Auxilary';

const layout = ( props ) => (
    <Aux>
        <Header />
        <main className="mt-16">
            {props.children}
        </main>
        <Footer />
    </Aux>
);

export default layout;