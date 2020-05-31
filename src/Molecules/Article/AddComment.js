import React, { useState } from 'react';

// import Para from '../../Atoms/Para';
import Button from '../../Atoms/Button';
import H2 from '../../Atoms/H2';

const AddComment = () => {
    const inputStyle = "bg-gray-300 w-4/5 rounded-lg text-sm p-2 text-gray-600 outline-none focus:shadow-outline my-2"

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const btnClickedHanler = () => {
        console.log("You clicked the fucking button")
    }

    return (
        <div className="mt-10"> 
            <H2 text="Leave a Reply" />
            <div className="my-5">
                <input 
                    type="text" 
                    placeholder="Your full name"
                    className={inputStyle}
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Your email address"
                    className={inputStyle}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <textarea 
                    rows="4" 
                    placeholder="Comments" 
                    className={inputStyle}
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                ></textarea>
            </div>
            <Button text="Post Comment" btnColor="bg-main-500" type="submit" btnClicked={btnClickedHanler} />
        </div>
    );
}

export default AddComment;