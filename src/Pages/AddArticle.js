import React from 'react';

import PageHeader from '../Organisms/pageHeader';
import HeaderImage from '../assets/images/blog-header.JPG';

import Aux from '../hoc/Auxilary';

const AddArticle = () => {
    return (
        <Aux>
            <PageHeader pageName="Blog" headerImage={HeaderImage} className=' object-bottom'  />
            
            <div className="tj-container">
                <h1>We add articles here</h1>
            </div>
        </Aux>  
    );
}

export default AddArticle;