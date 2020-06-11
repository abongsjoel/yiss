import React from 'react';
import { useHttp } from '../Hooks/useHttp';

import PageHeader from '../Organisms/pageHeader';
import BlogListing from '../Molecules/BlogListing';
import HeaderImage from '../assets/images/blog-header.JPG';
import Spinner from '../Atoms/Spinner/Spinner';

import drSmikes from '../assets/images/doc.jpg';

import Aux from '../hoc/Auxilary';


const Blog = () => {

     console.log("BlogPage runs")

     const [blogPosts, err] = useHttp('/articles.json', []);

     let blogListing = <Spinner />;

     if(err) {
          blogListing = <p className="text-sec-100 font-bold"> Sorry, could not load blog posts. Try again later </p>
     } else if(blogPosts) {
          const blogs = blogPosts.slice(0,9);
          blogListing = blogs.map(blogPost => {
               console.log("the id from sent to params is ", blogPost.articleId);
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
     } else {
          // blogListing = <p className="text-main-200 font-bold">Sorry, there are no blog articles at this point. Check back later</p>
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