import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Flecha from "../images/flecha-correcta.png";
import IconButton from "../components/IconButton";
import Logo from "../images/unsafesiu-logo.png";

const Home = () => {

  return (
    <>
      <div className="row Portada">
        <div className="column">
          <Container>
            <Row className="justify-content-lg-center" >
              <Col md="auto" style={{ paddingTop: "10%", alignItems: "center"}}>
                <img
                  src={Logo}
                  alt=""
                />
              </Col>
            </Row>
            <Row className="justify-content-lg-center">
              <Col md="auto" style={{ fontSize: "30px", paddingTop: "0%" }}>
                <h1>UnsafeSIU</h1>
              </Col>
            </Row>
            <Row className="justify-content-lg-center">
              <Col md="auto" style={{ paddingTop: "10%" }}>
                <IconButton
                  classes="cssbuttons-io-button"
                  text="Ingresar"
                  icon={Flecha}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      

    </>
  );
};

export default Home;
