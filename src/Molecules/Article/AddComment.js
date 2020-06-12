import React, { useState } from 'react';

import Button from '../../Atoms/Button';
import H2 from '../../Atoms/H2';

import axios from '../../axios/firebase';
import Input from '../../Atoms/Input';

const AddComment = ({articleId}) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [submitting, setStubmitting] = useState(false);

    const btnClickedHanler = () => {
        setStubmitting(true);
        const newComment = {
            name: fullName,
            email,
            body,
            articleId,
            commentId: Date.now()
        }
        console.log(newComment)
        axios.post('/comments/'+articleId+'.json', newComment)
            .then (response => {
                console.log("Wow, your comment was successfully delivered to the server");
                console.log(response.data);
                setStubmitting(false);
            }).catch ( error => {
                console.log("Error: your comment could not be delivered");
                setStubmitting(false);
            })
    }

    return (
        <div className="mt-10"> 
            <H2 text="Leave a Reply" />
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
                    initialValue={body}
                    textChanged={(event) => setBody(event.target.value)}
                />
            </div>
            <Button text={submitting ? "Posting..." : "Post Comment" } btnColor="bg-main-500" type="submit" btnClicked={btnClickedHanler} />
        </div>
    );
}

export default AddComment;