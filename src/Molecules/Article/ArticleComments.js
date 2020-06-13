import React from 'react'

import { useHttp } from '../../Hooks/useHttp';

import Para from '../../Atoms/Para';
import Spinner from '../../Atoms/Spinner/Spinner';
import ErrorMessage from '../../Atoms/ErrorMessage';

const ArticleComments = ({articleId}) => {

    const [comments, commentsErr] = useHttp('/comments/'+articleId+'.json', []);

    // console.log("Content of comments", comments);

    let articleComments = <Spinner />

    if(commentsErr) {
        articleComments = <ErrorMessage>Sorry, comments could not be loaded for some reason </ErrorMessage>
    } else if(comments) {
        articleComments = Object.entries(comments).reverse().map(comment => {
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
        <div>
            {articleComments}
        </div>
    )
}

export default ArticleComments
