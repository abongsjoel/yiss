import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import Homepage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import OurCommunitiesPage from './Pages/OurCommunitiesPage';
import BlogPage from './Pages/BlogPage';
import ContactUsPage from './Pages/ContactUsPage';

function App() {
  return (  
    <Layout>
      <Switch>
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/our-communities" component={OurCommunitiesPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Layout>
  );
}

export default App;
