import React from 'react';

import Header from '../Molecules/Header';
import Aux from '../hoc/Auxilary';

const layout = ( props ) => (
    <Aux>
        <Header />
        <main className="mt-16">
            {props.children}
        </main>
    </Aux>
);

export default layout;