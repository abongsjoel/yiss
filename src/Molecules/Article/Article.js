import React from 'react';

import H1 from '../../Atoms/H1';
import Para from '../../Atoms/Para';
import Comment from './Comment';
import AddComment from './AddComment';

import Aux from '../../hoc/Auxilary';

const Article = ({title, body, authorPic, authorName, publishedDate, ArticleId, comments }) => {

    return (
        <Aux>
            <H1 part1={title} />
            <Para text={publishedDate} styles='text-sm' />

            <Para text={body} styles="pt-6" />
            
            <div className="flex items-center mt-4">
                <img src={authorPic} alt="" className="w-20 h-20 rounded-full border border-gray-300 p-1 mr-4 " />
                <div>
                    <Para text={authorName} styles='text-sm font-bold' />
                    <p className='text-gray-700 text-sm' >Read <span className="text-sec-100"><a href='/blog'>more posts</a></span> </p> 
                </div>
            </div>

            <Comment  comments={comments} ArticleId={ArticleId} />
            <AddComment articleId={ArticleId} />

        </Aux>   
    )
}


export default Article;