import { Button, Form, Modal, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import React from "react";
import { obtenerCalificaciones, modificarCalificacion } from "../api/calificaciones";
import {ReactComponent as Check} from "../images/check.svg";
import {ReactComponent as Cross} from "../images/cross.svg";

const NotasModal = (props) => {

  const {materia} = props;
  const [calificaciones, setCalificaciones] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerCalificaciones(materia.id);
      setCalificaciones(data);
    };
    console.log(materia);
    fetchData();
  }, [materia])
  

  const closeNotas = () => {
    props.setNotas(false);
    console.log("Close login");
  };

  const cambiarNota = async (event, calificacion, index) => {
    event.preventDefault();
    const formData = new FormData(event.target),
    formDataObj = Object.fromEntries(formData.entries());

    let calificacionActualizada = {
      ...calificacion, 
      calificacion: parseFloat(formDataObj.calificacion)
    }

    const modificadoCorrectamente = await modificarCalificacion(calificacionActualizada);

     if(modificadoCorrectamente){ //TODO: descomentar
      calificacionActualizada = {
        ...calificacion,
        actualizada: (<Check/>)
      }
      const nuevasCalificaciones = [...calificaciones];
      nuevasCalificaciones[index] = calificacionActualizada;
      setCalificaciones(nuevasCalificaciones);
    }
    else{
      calificacion = {
        ...calificacion,
        actualizada: (<Cross/>)
      }
      const nuevasCalificaciones = [...calificaciones];
      nuevasCalificaciones[index] = calificacion;
      setCalificaciones(nuevasCalificaciones);
    }
  };

  return (
    <Modal show={props.showNotas} onHide={closeNotas} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Notas {materia.nombre} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {calificaciones.map((calificacion, index) => (

        <Form key={calificacion.id} onSubmit={(event) => cambiarNota(event, calificacion, index)}>
          <Row className="py-2">
            <Col xs={4}>
              <h6 className="pt-2">{calificacion.nombre} {calificacion.apellido}</h6>
            </Col>
            <Col xs={4}>
              <h6 className="pt-2">{calificacion.descripcionNota}</h6>
            </Col>
            <Col xs={1} className="px-1">
            <Form.Control
              className="py-1"
              type="text"
              defaultValue={calificacion.calificacion}
              name="calificacion"
            />
            </Col>
            <Col xs={1}>
              {calificacion.actualizada}
            </Col>
            <Col xs={2}>
              <Button variant="primary" type="submit">
                Confirmar
              </Button>
            </Col>
          </Row>
        </Form>
      ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeNotas}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NotasModal;
