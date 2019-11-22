import React from 'react';
import Layout from './Organisms/Layout/Layout';

import './App.css';
import Logo from './assets/logo.jpeg';

function App() {
  return (
      <div className="App">  
       {/* {Remove class and the App.css when real development work stars} */}  
        <Layout>
          <h1>Hello and Welcome to the YISS Website</h1>
          <img src={Logo} alt='YISS logo'/>
          <p>Production is ongoing so hand on for the ride</p>
        </Layout>
      </div>
  );
}

export default App;
