import React from 'react';

import H1 from '../Atoms/H1';
import WelcomeMessage from './WelcomeMessage';

const Message = () => {
    return (
        <div>
            <H1 part1="Welcome to " part2="YISS" />
            <div className="border-t mt-4 pt-4">
            <WelcomeMessage />
            btn
            </div>
        </div>
    );
}

export default Message;