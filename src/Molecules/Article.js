import React from 'react';

import H1 from '../Atoms/H1';
import Para from '../Atoms/Para';

import likeIcon from '../assets/icons/like.svg';

import Aux from '../hoc/Auxilary';

const Article = ({title, body, authorPic, authorName, publishedDate}) => {
    return (
        <Aux>
            <H1 part1={title} />
            <Para text={publishedDate} styles='text-sm' />

            <Para text={body} styles="pt-6" />
            
            <div className="flex items-center mt-4">
                <img src={authorPic} alt="" className="w-20 h-20 rounded-full border border-gray-300 p-1 mr-4 " />
                <div>
                    <Para text={authorName} styles='text-sm font-bold' />
                    <p className='text-gray-700 text-sm' >Read <span className="text-sec-100"><a href='/blog'>more posts</a></span> by this author</p> 
                </div>
            </div>

            {/* Comment Section */}
            <div className="mt-8 flex items-center">
                <p className="text-gray-700 text-base font-bold pr-4">3 comments</p>
                <img src={likeIcon} alt="" className="w-4 h-4" />
                <p className="text-gray-700 text-sm px-1 font-bold">Likes</p>
                <p className="bg-gray-300 text-xs p-1">20</p>
            </div>
            <hr className="mt-1" />
        </Aux>   
    )
}


export default Article;