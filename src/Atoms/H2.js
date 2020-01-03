import React from 'react';

const H2 = ({text, styles}) => {
    let changningStyles = " c-sub ";
    if (styles) {
        changningStyles = styles;
    }
    const fixedStyles = " h2-font mb-2 "
    return (
        <h2 className={ fixedStyles + changningStyles }>{text}</h2>
    );
}

export default H2;