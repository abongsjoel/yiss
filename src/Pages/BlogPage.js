import React from 'react';

import PageHeader from '../Organisms/pageHeader';
import BlogListing from '../Molecules/BlogListing';

import Aux from '../hoc/Auxilary';

import HeaderImage from '../assets/images/blog-header.JPG';

const Blog = () => (
    <Aux>
        <PageHeader pageName="Blog" headerImage={HeaderImage} className=' object-bottom'  />
        
        <div className="tj-container">
           <BlogListing 
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ante finibus, 
                tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. 
                Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. 
                Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolor"
           />
            
        </div>

    </Aux>   
);

export default Blog;