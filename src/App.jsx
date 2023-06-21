import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import UserHomePage from './Pages/UserHomePage';
import Materias from './Pages/Materias';
import Cursos from './Pages/Cursos';
import Profesores from './Pages/Profesores';
import NoMatch from './Pages/NotFound';
import './css/style.css';

const App = () => {


  return (
    <Routes> 
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="MiHome" element={<UserHomePage />} />
        <Route path="Materias" element={<Materias />} />
        <Route path="Cursos" element={<Cursos />} />
        <Route path="Profesores" element={<Profesores />} />
        <Route path="404" element={<NoMatch />} />
        
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
