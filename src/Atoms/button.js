import React from 'react';

const Button = ({text, btnColor}) => {

    let changingStyle = "hover:bg-blue-700 text-blue-700  border-blue-700 hover:text-white";
    if (btnColor === "white") {
        changingStyle = "hover:bg-white text-white  border-white hover:text-blue-700";
    }
    const fixedStyle = "bg-transparent font-semibold inline-block py-1 px-8 border hover:border-transparent rounded text-sm";
    
    return (
        <button type="button" className={fixedStyle + " " + changingStyle}>{text}</button>
    );
}

export default Button;

