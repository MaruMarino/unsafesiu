import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Col, Container, Row } from "react-bootstrap";
import { obtenerProfesores } from "../api/user";

const Profesores = () => {

  const [profesores, setProfesores] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          const data = await obtenerProfesores();
          setProfesores(data);
      };
      fetchData();
  }, [])

  return (
    <>
      <Header />
      <Container style={{ backgroundColor: "papayawhip", fontFamily: 'Helvetica' }}>
        <Row className="py-4" >
          <Col md="auto" >
            <h3>Profesores:</h3>
          </Col>
        </Row>
        <Container className="px-5">
          <Row className="py-2 d-flex" >
              <Col xs={3}>
                  <h6 className="pt-2"><strong>Nombre</strong></h6>
              </Col>
              <Col xs={3} className="px-1">
                  <h6 className="pt-2"><strong>Apellido</strong></h6>
              </Col>
              <Col xs={6} className="px-1">
                  <h6 className="pt-2"><strong>Mail</strong></h6>
              </Col>
          </Row>
          {profesores.map((profesor) => (
              <Row key={profesor.id} className="py-2 d-flex justify-content-between" >
                  <Col xs={3}>
                      <h6 className="pt-2">{profesor.nombre}</h6>
                  </Col>
                  <Col xs={3} className="px-1">
                      <h6 className="pt-2">{profesor.apellido}</h6>
                  </Col>
                  <Col xs={6} className="px-1">
                      <h6 className="pt-2">{profesor.mail}</h6>
                  </Col>
              </Row>
          ))}
        </Container>
        <Row>
          <div style={{ height: 70 }}></div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Profesores;
