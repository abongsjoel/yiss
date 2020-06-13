import React, { useState} from 'react';

import axios from '../../axios/firebase';

import AddComment from './AddComment';
import ArticleComments from './ArticleComments';

import Aux from '../../hoc/Auxilary';

const Comment = ({articleId}) => {

    const [submitting, setStubmitting] = useState(false);

    const postCommentHandler = (newComment) => {
        setStubmitting(true);
        console.log("About to post comment", newComment);

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
        <Aux>
            {submitting ? null : <ArticleComments articleId={articleId} />}
            <AddComment articleId={articleId} postComment={postCommentHandler} submitting={submitting} />
        </Aux>
    );
}

export default Comment;