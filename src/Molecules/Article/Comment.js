import React, { useState} from 'react';

import { useHttp } from '../../Hooks/useHttp';

import AddComment from './AddComment';
import Para from '../../Atoms/Para';
import likeIcon from '../../assets/icons/like.svg';
import Spinner from '../../Atoms/Spinner/Spinner';
import ErrorMessage from '../../Atoms/ErrorMessage';

import Aux from '../../hoc/Auxilary';
import ArticleComments from './ArticleComments';

const Comment = ({articleId}) => {

    const [likes, setLikes] = useState(20);

    return (
        <Aux>
            <div className="mt-8 flex items-center">
                {/* <p className="text-gray-700 text-base font-bold pr-4">{comments ? Object.entries(comments).length : '0'} comment(s)</p> */}
                <div className="flex items-center cursor-pointer" onClick={() => setLikes(preLikes => preLikes + 1)}> 
                    <img src={likeIcon} alt="" className="w-4 h-4" />
                    <p className="text-main-200 text-sm px-1 font-bold">Likes</p>
                </div>
                <p className="bg-gray-300 text-xs p-1">{likes}</p>
            </div>
            <hr className="mt-1 mb-4" />
            <ArticleComments articleId={articleId} />
            <AddComment articleId={articleId} />
        </Aux>
    );
}

export default Comment;