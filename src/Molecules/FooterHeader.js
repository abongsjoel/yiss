import React from 'react';

import H2 from '../Atoms/H2';

const FooterHeader = ({header}) =>  (
    <H2 text={header} styles="text-main-300 font-medium uppercase text-sm pb-1" />
);

export default FooterHeader;