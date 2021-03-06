import React from 'react';

import H2 from '../Atoms/H2';
import Para from '../Atoms/Para';

const SubMessage = ({heading, messageBody}) =>  (
    <div className="mt-4">
        <H2 text={heading} styles="text-sm pl-8" />
        <Para 
            text={messageBody}
            styles=" text-sm "
        />
    </div>
);

export default SubMessage;