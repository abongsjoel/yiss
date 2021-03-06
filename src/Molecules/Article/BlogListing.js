import React from 'react';
import { Link } from 'react-router-dom';

import H1 from '../../Atoms/H1';
import Para from '../../Atoms/Para';

import Aux from '../../hoc/Auxilary';

const BlogListing = ({title, body, id,  authorPic, authorName, publishedDate, firstBlog}) => {
    
    const separatingLine = firstBlog ? null : <hr className="my-10" />

    return (
        <Aux>
            {separatingLine}
            <Link to={"/blog/article/" + id}>
                <H1 part1={title} />
            </Link>
            <Para text={body} styles="pt-6" />
            <Link to={"/blog/article/" + id}>
                <p className="text-sec-100">Read More</p>
            </Link>
            <div className="flex items-center mt-4">
                <img src={authorPic} alt="" className="w-6 h-6 rounded-full border-1 border-gray-100 mr-4 " />
                <Para text={authorName} styles='text-sm mr-4' />
                <Para text=' |  '  styles='text-sm mr-4' />
                <Para text={publishedDate} styles='text-sm' />
            </div>
        </Aux>   
    )
}


export default BlogListing;