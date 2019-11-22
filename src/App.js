import React from 'react';
import Layout from './Organisms/Layout/Layout';
import Button from "./Atoms/button";

import Logo from './assets/logo.jpeg';

function App() {
  return (
      <div className="w-3/4 mx-auto h-auto text-center">   
        <Layout>
          <h1 className="text-xl sm:text-3xl font-bold m-5">Hello and Welcome to the YISS Website</h1>
          <img src={Logo} alt='YISS logo'/>
          <p className="text-md font-semibold m-5 text-red-500">Production is ongoing so hang on for the ride</p>

          {/* Just Testing TailWindcss */}
          <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
            <h1>Super cool page</h1>
            <Button onClick={() => console.log("I was clicked")}>
              I am YISS
            </Button>
          </div>
        </Layout>
      </div>
  );
}

export default App;
