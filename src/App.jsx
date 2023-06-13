import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import './css/style.css';

const App = () => {


  return (
    <Routes> 
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
         {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Navigate replace to="/404" />} />
      </Route>
    </Routes>
  );
}


function Layout() {
  return (
    <div>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
