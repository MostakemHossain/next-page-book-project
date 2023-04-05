import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';

const App = () => {
  return (
    <div>
      {/* header  */}
      <Header></Header>
      <div className="min-h-[calc(100vh-136px)]">

      <Outlet  ></Outlet>
      </div>
      {/* footer  */}
      <Footer></Footer>

    </div>
  );
};

export default App;