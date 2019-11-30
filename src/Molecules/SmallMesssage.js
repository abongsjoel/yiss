import React from 'react';

import H2 from '../Atoms/H2';
import Para from '../Atoms/Para';

const SmallMessage = ({heading, messageBody}) => {
    return (
        <div className="mb-4">
            <H2 text={heading} />
            <Para 
                text={messageBody}
                fontSize="text-sm"
                fontColor="text-black"
            />
        </div>
    );
}

export default SmallMessage;