import React from 'react'

import H2 from '../../Atoms/H2';
import Input from '../../Atoms/Input';

import Aux from '../../hoc/Auxilary';

const PersonalInfo = ({name, nameChanged, email, emailChanged}) => {
    return (
        <Aux>
            <hr className="my-5" />
            <H2 text="Personal Information" />
            <div className="my-5 w-full flex">
                <div className="w-1/2 mr-2">
                    <Input 
                        type = "text"
                        placeholder = "Enter your name"
                        label = "Name"
                        required
                        initialValue={name}
                        textChanged={nameChanged}
                    />
                </div>
                <div className="w-1/2 ml-2">
                    <Input 
                        type = "text"
                        placeholder = "Enter your email address"
                        label = "Email"
                        hint = "Your email address will not be published"
                        initialValue={email}
                        textChanged={emailChanged}
                    />
                </div>
            </div>
        </Aux>
    )
}

export default PersonalInfo
