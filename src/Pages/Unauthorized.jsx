import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Unauthorized = () => {
  const location = useLocation();

  return (
    <div>
      <Header/>
        <center>
          <h1>Unauthorized</h1>
          <p>No estas autorizado para ver esta página</p>
        </center>
     <Footer/>
    </div>
  );
};

export default Unauthorized;
