import React, { useState } from 'react';

import Button from '../../Atoms/Button';
import H2 from '../../Atoms/H2';

import axios from 'axios';
import Input from '../../Atoms/Input';

const AddComment = ({articleId}) => {
    const inputStyle = "bg-gray-300 w-4/5 rounded-lg text-sm p-2 text-gray-600 outline-none focus:shadow-outline my-2"

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const btnClickedHanler = () => {
        const newComment = {
            name: fullName,
            email,
            comment,
            articleId
        }
        console.log(newComment)
        // axios.post('/posts', newComment)
        //     .then (response => {
        //         console.log("Wow, your comment was successfully delivered to the server");
        //         console.log(response.data);
        //     }).catch ( error => {
        //         console.log("Error: your comment could not be delivered");
        //     })
    }

    return (
        <div className="mt-10"> 
            <H2 text="Leave a Reply" />
            {/* <p className="text-gray-500 text-xs">Your email address will not be published</p> */}
            <div className="my-5 w-4/5">
                <div className="flex mb-5">
                    <div className="w-1/2 mr-2">
                        <Input
                            type="text" 
                            placeholder="Your full name"
                            label="Name"
                            required
                            initialValue={fullName}
                            textChanged={(event) => setFullName(event.target.value)}
                        />
                    </div>
                    <div className="w-1/2 ml-2">
                        <Input
                            type="email" 
                            placeholder="Your email address"
                            label="Email"
                            initialValue={email}
                            textChanged={(event) => setEmail(event.target.value)}
                            hint = "Your email address will not be published"
                        />
                    </div>
                </div>
                <Input
                    type="textarea" 
                    rows="4" 
                    placeholder="Type your comments here" 
                    label="Comment"
                    required
                    className={inputStyle}
                    value={comment}
                    textChanged={(event) => setComment(event.target.value)}
                />
            </div>
            <Button text="Post Comment" btnColor="bg-main-500" type="submit" btnClicked={btnClickedHanler} />
        </div>
    );
}

export default AddComment;