import React from 'react';

const H1 = ({part1, part2}) => {
    return (
        <div className="h1-font">
            <h1 className="inline text-blue-700">{part1}</h1>
            <h1 className="inline c-secondary">{part2}</h1>
        </div>
    );
}

export default H1;