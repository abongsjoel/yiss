import React from 'react';
import { withRouter } from 'react-router';

import { useHttp } from '../Hooks/useHttp';


import PageHeader from '../Organisms/pageHeader';
import Artilce from '../Molecules/Article/Article';
import Spinner from '../Atoms/Spinner/Spinner';

import drSmikes from '../assets/images/doc.jpg';

import Aux from '../hoc/Auxilary';

import HeaderImage from '../assets/images/blog-header.JPG';

const BlogArticle = (props) => {

    const ArticleId = props.match.params.id;

    const [blogPosts, err] = useHttp('/articles.json', []);

    console.log("Content of blogPosts", blogPosts);

    // const [comments, commentsErr] = useHttp('/post/' + ArticleId + '/comments', []);

    let article = <Spinner />

    if(err) {
        article = <p>Something went wrong</p>
    } else if (blogPosts.length !== 0 ) {
        article = blogPosts.map(blogPost => {
            if(blogPost.articleId == ArticleId){
                article = (
                    <Artilce 
                        key={ArticleId} 
                        articleId={ArticleId}
                        title={blogPost.title}
                        body={blogPost.body + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ante finibus, tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolorAenean eu ante finibus, tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolorAenean eu ante finibus, tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolorAenean eu ante finibus, tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. Integer rhoncus quam vitae euismod pharetra. "}
                        authorPic={drSmikes}
                        authorName="Dr. Acho Fon"
                        publishedDate="03 March 2020"
                        firstBlog
                        // comments={comments}
                    />  
                );
                return article;
            } 
        });
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