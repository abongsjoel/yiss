import React from 'react';
import { withRouter } from 'react-router';

import { useHttp } from '../Hooks/useHttp';

import PageHeader from '../Organisms/pageHeader';
import Artilce from '../Molecules/Article/Article';
import Spinner from '../Atoms/Spinner/Spinner';

import drSmikes from '../assets/images/doc.jpg';
import HeaderImage from '../assets/images/blog-header.JPG';

import Aux from '../hoc/Auxilary';


const BlogArticle = (props) => {

    const ArticleId = props.match.params.id;

    const [blogPosts, err] = useHttp('/articles.json', []);
    // const [comments, commentsErr] = useHttp('/comments/'+ArticleId+'.json', []);

    console.log("Content of blogPosts", blogPosts);

    let article = <Spinner />

    if(err) {
        article = <p>Something went wrong</p>
    } else if (blogPosts.length !== 0 ) {
        article = blogPosts.map(blogPost => {
            if(blogPost.articleId == ArticleId){
                article = (
                    <Artilce 
                        key={blogPost.articleId} 
                        articleId={blogPost.articleId}
                        title={blogPost.title}
                        body={blogPost.body}
                        authorPic={drSmikes}
                        authorName={blogPost.author}
                        publishedDate={blogPost.date}
                        firstBlog
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