import { Button, Form, Modal } from "react-bootstrap";
import { logInUser } from "../api/user";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginModal = (props) => {
  let navigate = useNavigate(); 
  const login = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target),
    formDataObj = Object.fromEntries(formData.entries());
    const response = await logInUser(formDataObj);
    console.log(response);
    if(response!=null){
      localStorage.setItem('jwt', response.token);
      localStorage.setItem('rol', response.rol);
      //window.location.replace("/MiHome")
      if(response.rol === "ROLE_ALUMNO"){
        navigate("/Materias");
      } else if (response.rol === "ROLE_PROFESOR"){
        navigate("/Cursos");
      } else if (response.rol === "ROLE_RECTOR"){
        navigate("/Profesores");
      }
      
    }
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
