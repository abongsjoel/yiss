import React from 'react';

const Para = ({text, styles}) => {
    return (
        <p className={styles}>{text}</p>
    );
}

export default Para;