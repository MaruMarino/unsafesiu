import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";

function LoginModal(props) {
  const login = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log("Form data:");
    console.log(formDataObj);
    //window.location.replace("/MiHome")
  };

  const closeLogIn = () => {
    props.setLogin(false);
    console.log("Close login");
  };

  return (
    <Modal show={props.showLogin} onHide={closeLogIn}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={login} id="loginForm">
          <Form.Group className="mb-3" controlId="username-group">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="user"
              placeholder="usuario1234"
              name="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password-group">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="1234contr"
              name="password"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeLogIn}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="loginForm">
          Ingresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
