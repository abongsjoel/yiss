import React from 'react';

import H1 from '../Atoms/H1';
import Para from '../Atoms/Para';

import Aux from '../hoc/Auxilary';

const BlogListing = ({title, body}) => (
    <Aux>
        <H1 part1={title} />
        <Para text={body} styles="pt-6" />
        <p className="text-sec-100">Read More</p>
        <div>
            
        </div>

    </Aux>   
);

export default BlogListing;