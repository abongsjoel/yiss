import React, { useState} from 'react';

import Para from '../../Atoms/Para';
import likeIcon from '../../assets/icons/like.svg';

import Aux from '../../hoc/Auxilary';

const Comment = ({comments, ArticleId}) => {

    const [likes, setLikes] = useState(20);

    const articleComments = comments.map(comment => {
        return (
            <div className="flex items-start my-5" key={comment.id}>
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-2">

                </div>
                <div className="w-3/5"> 
                    <p className="text-sm font-bold"> {comment.name}  <span className=" font-normal text-gray-400">({comment.email}) |  2 hours ago</span></p>
                    <Para  text={comment.body} styles="text-sm mt-2 text-gray-400" />
                    {/* <a href="/"><p className="text-sm text-gray-900">Reply</p></a> */}
                </div>
            </div>
        );
    })

    return (
        <Aux>
            <div className="mt-8 flex items-center">
                <p className="text-gray-700 text-base font-bold pr-4">{comments.length} comments</p>
                <div className="flex items-center cursor-pointer" onClick={() => setLikes(preLikes => preLikes + 1)}> 
                    <img src={likeIcon} alt="" className="w-4 h-4" />
                    <p className="text-main-200 text-sm px-1 font-bold">Likes</p>
                </div>
                <p className="bg-gray-300 text-xs p-1">{likes}</p>
            </div>
            <hr className="mt-1 mb-4" />
            {articleComments}
        </Aux>
    );
}

export default Comment;