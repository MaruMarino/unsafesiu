import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import Logo from "../images/unsafesiu-logo.png";

const Header = () => {
    return (
    
    <div style={{backgroundColor: "black"}}>
      <Container>
        <div style={{ width: 'fit-content'}}>
          <Row className="justify-content-lg-center" >
            <Col md="auto" style={{alignItems: "center"}}>
              <img
                src={Logo}
                alt=""
                style={{height: 70}}
                />
            </Col>
          </Row>
          <Row className="justify-content-lg-center">
            <Col md="auto" style={{ paddingTop: "0%" }}>
              <h3 style={{color:"wheat"}}>UnsafeSIU</h3>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    );
  }

export default Header;