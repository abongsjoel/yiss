import React, { useState,useEffect } from 'react';

import PageHeader from '../Organisms/pageHeader';
import BlogListing from '../Molecules/BlogListing';
import HeaderImage from '../assets/images/blog-header.JPG';

import drSmikes from '../assets/images/doc.jpg';

import Aux from '../hoc/Auxilary';


const Blog = () => {

     const [ blogPosts, setBlogPosts ] = useState([])

     console.log("Blog is rendered")

     useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
               .then(response => response.json())
               .then(data => {
                    setBlogPosts(data)
               });
     }, [])

     let blogListing = <p>Loading...</p>

     if(blogPosts.length !== 0) {
          const blogs = blogPosts.slice(0,9);
          blogListing = blogs.map(blogPost => {
               return (
                    <BlogListing 
                         key={blogPost.id}
                         title={blogPost.title}
                         body= {blogPost.body}
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
                    {/* <BlogListing 
                         title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                         body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ante finibus, 
                         tempor purus non, viverra tellus. Nullam cursus volutpat nunc, a placerat purus mattis eu. 
                         Etiam fringilla mattis nunc vitae convallis. Aenean eu metus eget tellus fermentum gravida. 
                         Integer rhoncus quam vitae euismod pharetra. Proin a dictum dolor"
                         authorPic={drSmikes}
                         authorName="Dr. Acho Fon"
                         publishedDate="03 March 2020"
                         firstBlog
                    /> */}
                   
               </div>
          </Aux>   
     );
}

export default Blog;