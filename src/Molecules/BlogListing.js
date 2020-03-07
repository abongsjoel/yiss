import React from 'react';

import PageHeader from '../Organisms/pageHeader';

import Aux from '../hoc/Auxilary';

import HeaderImage from '../assets/images/blog-header.JPG';

const BlogListing = () => (
    <Aux>
        <PageHeader pageName="Blog" headerImage={HeaderImage} className=' object-bottom'  />
        
        <div className="tj-container">
           
            
        </div>

    </Aux>   
);

export default BlogListing;