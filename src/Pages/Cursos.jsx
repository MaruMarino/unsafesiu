import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NotasModal from "../components/NotasModal";
import { obtenerCursos } from "../api/user";



const Cursos = () => {

  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [materia, setMateria] = useState({});
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerCursos();
      setCursos(data);
    };
    console.log(cursos);
    fetchData();
  }, [])

  const abrirNotasMateria = (curso) => {
    setMateria(curso);
    setMostrarNotas(true);
  }
  
  return (
  <>
    
    <div>
      <Header />
        <Container style={{backgroundColor: "papayawhip", fontFamily:'Helvetica'}}>
            <Row className="py-4" >
              <Col md="auto" >
                <h3>Cursos disponibles:</h3>
              </Col>
            </Row>
            <Container className="px-5">
            {cursos.map((curso) => (
                <Col xs={12} lg={6} xl={4} className="py-1">
                  <Row>
                    <Button variant="warning" className="text-start" onClick={() => abrirNotasMateria(curso)}>
                      {curso.nombre}
                    </Button>
                  </Row>
                </Col>
            //<Link to="/materias" style={{textDecoration: 'none', color: "black"}}>
              /*<Row key={curso.id} id="_1" className="my-2 border border-3 border-dark rounded" onClick={() => abrirNotasMateria(curso)}>
                <Col md="auto">
                  <h4 className="mt-2">{curso.nombre}</h4>
                </Col>
              </Row>*/

            //</Link>
            ))}
            </Container>
            <Row>
              <div style={{height:70}}></div>
            </Row>
        </Container>
      <Footer />
    </div>
    {mostrarNotas ? <NotasModal showNotas={mostrarNotas} setNotas={setMostrarNotas} materia={materia}/> : null}
  </>
  );
};

export default Cursos;
