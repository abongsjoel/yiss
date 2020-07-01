import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import Homepage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import OurCommunitiesPage from './Pages/OurCommunitiesPage';
import BlogPage from './Pages/BlogPage';
import BlogArticle from './Pages/BlogArticlePage';
import ContactUsPage from './Pages/ContactUsPage';
import AddArticle from './Pages/AddArticle';
import GalleryPage from './Pages/GalleryPage/GalleryPage';

function App() {

  return (  
    <Layout>
      <Switch>
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/our-communities" component={OurCommunitiesPage} />
        <Route path="/blog/article/:id" component={BlogArticle} />
        <Route path="/admin" component={AddArticle} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Layout>  
  );
}

export default App;
