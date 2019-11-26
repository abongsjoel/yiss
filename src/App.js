import React from 'react';
import Layout from './Organisms/Layout';
import Homepage from './Pages/Homepage';

function App() {
  return (  
        <Layout>
          <Homepage />
          <p className="text-md font-semibold m-5 text-red-500">Production is ongoing so hang on for the ride</p>
        </Layout>
  );
}

export default App;
