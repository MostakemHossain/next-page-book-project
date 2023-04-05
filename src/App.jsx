import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';

const App = () => {
  return (
    <div>
      {/* header  */}
      <Header></Header>
      <Outlet></Outlet>
      {/* footer  */}

    </div>
  );
};

export default App;