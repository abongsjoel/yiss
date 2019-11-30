import React from 'react';

import H1 from '../Atoms/H1';
import WelcomeMessage from './WelcomeMessage';
import Button from '../Atoms/Button';

const Message = () => {
    return (
        <div>
            <H1 part1="Welcome to " part2="YISS" />
            <div className="border-t c-border mt-4 pt-4">
            <WelcomeMessage />
            <Button text="Learn More" btnColor="blue"/>
            </div>
        </div>
    );
}

export default Message;