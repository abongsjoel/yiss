import React from 'react';
import { useHttp } from '../Hooks/useHttp';

import PageHeader from '../Organisms/pageHeader';
import BlogListing from '../Molecules/Article/BlogListing';
import HeaderImage from '../assets/images/blog-header.JPG';
import Spinner from '../Atoms/Spinner/Spinner';
import ErrorMessage from '../Atoms/ErrorMessage';

import drSmikes from '../assets/images/doc.jpg';

import Aux from '../hoc/Auxilary';


const Blog = () => {
     
     console.log("BlogPage runs")
     
     let blogListing = <Spinner />;
     const [blogPosts, err, isLoading] = useHttp('/articles.json', []);


     if(isLoading) {
          blogListing = <Spinner />;
     } else if (err) {
          blogListing = <ErrorMessage>Sorry, could not load blog posts. Try again later </ErrorMessage>
     } else if(blogPosts) {
          const blogs = blogPosts.slice(0,9);
          blogListing = blogs.reverse().map(blogPost => {
               return (
                    <BlogListing 
                         key={blogPost.articleId}
                         title={blogPost.title}
                         body= {blogPost.preview}
                         id={blogPost.articleId}
                         authorPic={drSmikes}
                         authorName={blogPost.author}
                         publishedDate={blogPost.date}
                         firstBlog={false}
                    />
               );
          });   
     } else {
          blogListing = <p className="text-main-200 font-bold">Sorry, there are no blog articles at this point. Check back later</p>
     }

     return (
          <Aux>
               <PageHeader pageName="Blog" headerImage={HeaderImage} className=' object-bottom'  />
               
               <div className="tj-container">  
                    {blogListing}      
               </div>
          </Aux>   
     );
}

export default Blog;