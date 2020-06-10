import React from 'react'

import Aux from '../hoc/Auxilary';

const InputText = ({type, placeholder, label, required}) => {
    const inputStyle = "bg-gray-300 w-full rounded-lg text-sm p-2 text-gray-600 outline-none focus:shadow-outline my-2"

    return (
        <Aux>
            <label className="pl-1">
                {label}<span className="text-red-700">{required ? " *" : null}</span>
            </label>
            <br />
            <input 
                type={type} 
                placeholder={placeholder}
                className={inputStyle}

                // value={fullName}
                // onChange={(event) => setFullName(event.target.value)}
            />
        </Aux>
    )
}

export default InputText
