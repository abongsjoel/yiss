import React from 'react';
import { withRouter } from 'react-router';

import PageHeader from '../Organisms/pageHeader';
import Artilce from '../Molecules/Article/Article';

import drSmikes from '../assets/images/doc.jpg';

import Aux from '../hoc/Auxilary';

import HeaderImage from '../assets/images/blog-header.JPG';

const BlogArticle = (props) => {

    const id = props.match.params.id;
    
    console.log("My id is :", id);

    return (
        <Aux>
            
            <PageHeader pageName="Blog" headerImage={HeaderImage} className=' object-bottom'  />
            
            <div className="tj-container">
                <Artilce  
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ante finibus, 
                        tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. 
                        Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. 
                        Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolor
                        Aenean eu ante finibus, 
                        tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. 
                        Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. 
                        Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolor
                        Aenean eu ante finibus, 
                        tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. 
                        Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. 
                        Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolor
                        Aenean eu ante finibus, 
                        tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. 
                        Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. 
                        Integer rhoncus quam vitae euismod pharetra. "
                        authorPic={drSmikes}
                        authorName="Dr. Acho Fon"
                        publishedDate="03 March 2020"
                        firstBlog
                        comments=" Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. 
                        Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolor"
                />     
            </div>

        </Aux>   
    );
}

export default withRouter(BlogArticle);