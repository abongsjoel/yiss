import React from 'react';
import { withRouter } from 'react-router';

import { useHttp } from '../Hooks/useHttp';


import PageHeader from '../Organisms/pageHeader';
import Artilce from '../Molecules/Article/Article';

import drSmikes from '../assets/images/doc.jpg';

import Aux from '../hoc/Auxilary';

import HeaderImage from '../assets/images/blog-header.JPG';

const BlogArticle = (props) => {

    const id = props.match.params.id;

    const [blogPost, err] = useHttp('/posts/' + id, []);
    const [comments, commentsErr] = useHttp('/post/' + id + '/comments', []);

    let article = <p>Loading...</p>
    if(err || commentsErr) {
        article = <p>Something went wrong</p>
    } else if (blogPost.length !== 0 ) {
        article = (
            <Artilce  
                id={id}
                title={blogPost.title}
                body={blogPost.body + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ante finibus, tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolorAenean eu ante finibus, tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolorAenean eu ante finibus, tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolorAenean eu ante finibus, tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. Integer rhoncus quam vitae euismod pharetra. "}
                authorPic={drSmikes}
                authorName="Dr. Acho Fon"
                publishedDate="03 March 2020"
                firstBlog
                comments={comments}
            />  
        );
    }

    return (
        <Aux>
            <PageHeader pageName="Blog" headerImage={HeaderImage} className=' object-bottom'  />
            
            <div className="tj-container">
                {article}
            </div>
        </Aux>   
    );
}

export default withRouter(BlogArticle);