import React from 'react';
import { useHttp } from '../Hooks/useHttp';

import PageHeader from '../Organisms/pageHeader';
import BlogListing from '../Molecules/BlogListing';
import HeaderImage from '../assets/images/blog-header.JPG';

import drSmikes from '../assets/images/doc.jpg';

import Aux from '../hoc/Auxilary';


const Blog = () => {

     console.log("BlogPage runs")

     const [blogPosts, err] = useHttp('/articles', []);

     let blogListing = <p>Loading...</p>

     if(err) {
          blogListing = <p> Sorry, could not load blog posts. Try again later </p>
     } else if(blogPosts.length !== 0) {
          const blogs = blogPosts.slice(0,5);
          blogListing = blogs.map(blogPost => {
               return (
                    <BlogListing   
                         key={blogPost.id}
                         title={blogPost.title}
                         body= {blogPost.body}
                         id={blogPost.id}
                         authorPic={drSmikes}
                         authorName="Dr. Acho Fon"
                         publishedDate="03 March 2020"
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