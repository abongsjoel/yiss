import React from 'react';

import H2 from '../Atoms/H2';
import Para from '../Atoms/Para';

const SubMessage = ({heading, messageBody}) => {
    return (
        <div className="mt-4">
            <H2 text={heading} />
            <Para 
                text={messageBody}
                fontSize="text-sm"
                fontColor="text-black"
            />
        </div>
    );
}

export default SubMessage;