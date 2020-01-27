import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './hoc/Layout';
import Homepage from './Pages/Homepage';

function App() {
  return (  
    <Layout>
      <Route path="/" exact component={Homepage} />
      {/* <Homepage /> */}
    </Layout>
  );
}

export default App;
