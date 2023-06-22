import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Flecha from "../images/flecha-correcta.png";
import Logo from "../images/unsafesiu-logo.png";

import IconButton from "../components/IconButton";
import LoginModal from "../components/LoginModal";


const Home = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const enableLogin = () => {
    setLoginModal(true)
  }

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
                  onClickAction={enableLogin}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <LoginModal showLogin={loginModal} setLogin={setLoginModal} setUserRole={props.setUserRole}/>

    </>
  );
};

export default Home;
