import React from 'react'

import Aux from '../../hoc/Auxilary';

const Input = ({
    type, 
    placeholder, 
    label, 
    required, 
    hint, 
    instruction, 
    initialValue, 
    textChanged,
    rows,
    cols
}) => {
    const inputStyle = "bg-gray-300 w-full rounded-lg text-sm p-2 text-gray-600 outline-none focus:shadow-outline my-2"

    let input = (
        <input 
                type={type} 
                placeholder={placeholder}
                className={inputStyle}
                value={initialValue}
                onChange={(event) => textChanged(event)}
            />
    );

    if (type === "textarea") {
        input = (
            <textarea 
                rows={rows} 
                placeholder={placeholder}
                className={inputStyle}
                value={initialValue}
                onChange={(event) => textChanged(event)}
            ></textarea>
        );
    }
    return (
        <Aux>
            <label className="pl-1">
                {label}
                <span className="text-red-700">{required ? " *" : null}</span>
                <span className="text-sm text-gray-500 font-light">{hint ? " ("+hint+")" : null}</span>
            </label>
            <br />
            {input}
            <p className="text-xs text-gray-500 font-light -mt-2">{instruction}</p>
        </Aux>
    )
}

export default Input;