import React from 'react';

import SmallMessage from './SmallMesssage';

const WelcomeMessage = () => {
 return (
     <div >
         <SmallMessage 
            heading="Our Mission"
            messageBody="The Young Investigators Science Society brings together early career health sciences 
            researchers with the goal of building their research capacities and promoting communication 
            and collaboration among them."
        />
         <SmallMessage 
            heading="Our Vision"
            messageBody="YISS aspires to form a community of world-class competent and motivated young investigators
            capable of engaging in independent research to solve varying health problems which plague
            the health of nations."
        />
     </div>
 );
}

export default WelcomeMessage;