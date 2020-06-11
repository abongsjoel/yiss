import React from 'react';
import { useHttp } from '../Hooks/useHttp';

import PageHeader from '../Organisms/pageHeader';
import BlogListing from '../Molecules/BlogListing';
import HeaderImage from '../assets/images/blog-header.JPG';

import drSmikes from '../assets/images/doc.jpg';

import Aux from '../hoc/Auxilary';


const Blog = () => {

     console.log("BlogPage runs")

     const [blogPosts, err] = useHttp('/articles.json', []);

     let blogListing = <p>Loading...</p>

     if(err) {
          blogListing = <p> Sorry, could not load blog posts. Try again later </p>
     } else if(blogPosts.length !== 0) {
          const blogs = blogPosts.slice(0,9);
          blogListing = blogs.map(blogPost => {
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
          })   
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