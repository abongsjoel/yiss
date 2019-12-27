import React from 'react';

import Header from '../Molecules/Header';
import Aux from '../hoc/Auxilary';

const layout = ( props ) => (
    <Aux>
        <Header />
        <main>
            {props.children}
        </main>
        <div>Toolbar, SideDrawer, Backdrop</div>
    </Aux>
);

export default layout;