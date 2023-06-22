import React from "react";

import { Navbar, NavDropdown } from "react-bootstrap";
import { MdOutlineMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


import Logo from "../images/unsafesiu-logo.png";

const Header = () => {

  const role = localStorage.getItem("rol")

  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand href="/" style={{ paddingLeft: "2%" }}>
          <img
            alt=""
            src={Logo}
            width="40"
            height="auto"
            className="d-inline-block align-top"
          />{" "}
          UnsafeSIU
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown
            title={<><CgProfile color="white" size="2rem"/> <MdOutlineMenu color="white" size="2rem" /></> }
            id="collasible-nav-dropdown"
            align="end"
          >
            <NavDropdown.Item href="/MisDatos">Mis Datos</NavDropdown.Item>

            { role === "ROLE_ALUMNO" &&
              <NavDropdown.Item href="/Materias">Mis Materias</NavDropdown.Item> 
            }
            
            { role === "ROLE_PROFESOR" &&
              <NavDropdown.Item href="/Cursos">Mis Cursos</NavDropdown.Item> 
            }

            { role === "ROLE_RECTOR" &&
              <NavDropdown.Item href="/Profesores">Profesores</NavDropdown.Item> 
            }

            <NavDropdown.Divider />
            <NavDropdown.Item href="/" onClick={() => localStorage.clear()}>
              Cerrar Sesion
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>{" "}
      </Navbar>
    </div>
  );
};

export default Header;
