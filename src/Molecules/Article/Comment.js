import React, { useState} from 'react';

import { useHttp } from '../../Hooks/useHttp';

import AddComment from './AddComment';
import Para from '../../Atoms/Para';
import likeIcon from '../../assets/icons/like.svg';
import Spinner from '../../Atoms/Spinner/Spinner';
import ErrorMessage from '../../Atoms/ErrorMessage';

import Aux from '../../hoc/Auxilary';

const Comment = ({articleId}) => {

    const [likes, setLikes] = useState(20);

    const [comments, commentsErr] = useHttp('/comments/'+articleId+'.json', []);

    console.log("Content of comments", comments);

    let articleComments = <Spinner />

    if(commentsErr) {
        articleComments = <ErrorMessage>Sorry, comments could not be loaded for some reason </ErrorMessage>
    } else if(comments) {
        articleComments = Object.entries(comments).map(comment => {
            console.log(comment[1]);
            return (
                <div className="flex items-start my-5" key={comment[1].name}>
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-2">

                    </div>
                    <div className="w-3/5"> 
                        <p className="text-sm font-bold"> {comment[1].name}  <span className=" font-normal text-gray-400"> |  2 hours ago</span></p>
                        <Para  text={comment[1].body} styles="text-sm mt-2 text-gray-400" />
                        {/* <a href="/"><p className="text-sm text-gray-900">Reply</p></a> */}
                    </div>
                </div>
            );
        })
    } else {
        articleComments = <p className="text-main-200 font-semibold text-sm">Be the first to leave a comment</p>
    }

    

 

    return (
        <Aux>
            <div className="mt-8 flex items-center">
                <p className="text-gray-700 text-base font-bold pr-4">{comments ? Object.entries(comments).length : '0'} comment(s)</p>
                <div className="flex items-center cursor-pointer" onClick={() => setLikes(preLikes => preLikes + 1)}> 
                    <img src={likeIcon} alt="" className="w-4 h-4" />
                    <p className="text-main-200 text-sm px-1 font-bold">Likes</p>
                </div>
                <p className="bg-gray-300 text-xs p-1">{likes}</p>
            </div>
            <hr className="mt-1 mb-4" />
            {articleComments}
            <AddComment articleId={articleId} />
        </Aux>
    );
}

export default Comment;