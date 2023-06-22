import React, { useState, useEffect, useCallback } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { getMaterias } from "../api/user";

const Materias = () => {

  const [subjects, setSubjects] = useState([]);
  

  
  const misMaterias = useCallback( async () => {

    
    const response = await getMaterias();
    console.log(response);
    if (response != null) {
      setSubjects(response)
    }
  }, [])

  useEffect(() => {
    misMaterias()
      // make sure to catch any error
      .catch(console.error);;
  }, [misMaterias])

  return (
    <div>
      <Header />
        <h1>Materias</h1>
        {subjects?.map( (materia) => (
          <h2>materia.nombre</h2>
        )) }
      <Footer />
    </div>
  );
};

export default Materias;
