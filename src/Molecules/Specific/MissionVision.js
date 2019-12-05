import React from 'react';

import SubMessage from '../SubMessage';

const WelcomeMessage = () => {
 return (
     <div >
         <SubMessage 
            heading="Our Mission"
            messageBody="The Young Investigators Science Society brings together early career health sciences 
            researchers with the goal of building their research capacities and promoting communication 
            and collaboration among them."
        />
         <SubMessage 
            heading="Our Vision"
            messageBody="YISS aspires to form a community of world-class competent and motivated young investigators
            capable of engaging in independent research to solve varying health problems which plague
            the health of nations."
        />
     </div>
 );
}

export default WelcomeMessage;