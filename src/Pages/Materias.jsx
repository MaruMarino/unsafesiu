import React, { useState, useEffect, useCallback } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { getMaterias } from "../api/materias";
import { Button, Col, Container, Row } from "react-bootstrap";
import MateriasAlumnoModal from "../components/MateriasAlumnoModal";

const Materias = () => {

  const [subjects, setSubjects] = useState([]);

  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [materia, setMateria] = useState({});

  const misMaterias = useCallback(async () => {
    const response = await getMaterias();
    if (response != null) {
      setSubjects(response)
    }
  }, [])

  useEffect(() => {
    misMaterias()
      // make sure to catch any error
      .catch(console.error);;
  }, [misMaterias])

  const abrirNotasMateria = (subject) => {
    setMateria(subject);
    setMostrarNotas(true);
  }

  return (
    <>
      <div>
        <Header />
        <Container style={{ backgroundColor: "papayawhip", fontFamily: 'Helvetica' }}>
          <Row className="py-4" >
            <Col md="auto" >
              <h3>Materias:</h3>
            </Col>
          </Row>
          <Container className="px-5">
            {subjects.map((subject) => <div key={subject.id}>
              <Col xs={12} lg={6} xl={4} className="py-1">
                <Row>
                  <Button variant="warning" className="text-start" onClick={() => { abrirNotasMateria(subject) }}>
                    {subject.nombre}
                  </Button>
                </Row>
              </Col>
            </div>)}
          </Container>
          <Row>
            <div style={{ height: 70 }}></div>
          </Row>
        </Container>
        <Footer />
      </div >
      {mostrarNotas ? <MateriasAlumnoModal showNotas={mostrarNotas} setNotas={setMostrarNotas} materia={materia} /> : null
      }
    </>
  );
};

export default Materias;
