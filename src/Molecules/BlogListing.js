import React from 'react';

import H1 from '../Atoms/H1';
import Para from '../Atoms/Para';



import Aux from '../hoc/Auxilary';

const BlogListing = ({title, body, pic}) => (
    <Aux>
        <H1 part1={title} />
        <Para text={body} styles="pt-6" />
        <p className="text-sec-100">Read More</p>
        <div>
            <img src={pic} alt="" className="w-8 h-8 rounded-full border-1 border-gray-100 " />
        </div>

    </Aux>   
);

export default BlogListing;