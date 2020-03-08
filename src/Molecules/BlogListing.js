import React from 'react';

import H1 from '../Atoms/H1';
import Para from '../Atoms/Para';



import Aux from '../hoc/Auxilary';

const BlogListing = ({title, body, authorPic, authorName, publishedDate}) => (
    <Aux>
        <H1 part1={title} />
        <Para text={body} styles="pt-6" />
        <p className="text-sec-100">Read More</p>
        <div className="flex items-center my-4">
            <img src={authorPic} alt="" className="w-6 h-6 rounded-full border-1 border-gray-100 mr-4 " />
            <Para text={authorName} styles='text-sm mr-4' />
            <Para text=' |  '  styles='text-sm mr-4' />
            <Para text={publishedDate} styles='text-sm' />
        </div>
        <hr className="mt-8" />

    </Aux>   
);

export default BlogListing;