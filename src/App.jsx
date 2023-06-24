import React, { useState } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import Unauthorized from './Pages/Unauthorized'
import Materias from './Pages/Materias';
import Cursos from './Pages/Cursos';
import Profesores from './Pages/Profesores';
import NoMatch from './Pages/NotFound';

import ProtectedRoute from "./components/ProtectedRoute"

import './css/style.css';

const App = () => {

  const [userRole, setUserRole] = useState(localStorage.getItem("rol"))

  return (
    <Routes> 
      <Route path="/" element={<Layout />} >
      <Route index element={<Home setUserRole={setUserRole} />} />
      <Route path="404" element={<NoMatch />} />
      <Route exact path='/unauthorized'  element={<Unauthorized />} />

      <Route exact path='/Materias' element={<ProtectedRoute authorized={userRole === "ROLE_ALUMNO"}/>}>
        <Route exact path='/Materias' element={<Materias/>}/>
      </Route>

      <Route exact path='/Cursos' element={<ProtectedRoute authorized={userRole === "ROLE_PROFESOR"}/>}>
        <Route exact path='/Cursos' element={<Cursos/>}/>
      </Route>

      <Route exact path='/Profesores' element={<Profesores/>}/>


      
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
