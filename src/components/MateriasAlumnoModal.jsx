import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { obtenerCalificacionesPorAlumno } from "../api/materias";
import { useEffect, useState } from "react";

const MateriasAlumnoModal = (props) => {

    const { materia } = props;
    const [calificaciones, setCalificaciones] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await obtenerCalificacionesPorAlumno(materia.id);
            setCalificaciones(data);
        };
        fetchData();
    }, [materia])

    const closeNotas = () => {
        props.setNotas(false);
    };

    return (
        <Modal show={props.showNotas} onHide={closeNotas} size="md">
            <Modal.Header closeButton>
                <Modal.Title>Notas {materia.nombre} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="py-2 d-flex justify-content-between" >
                    <Col xs={9}>
                        <h6 className="pt-2"><strong>Descripción</strong></h6>
                    </Col>
                    <Col xs={1} className="px-1">
                        <h6 className="pt-2"><strong>Nota</strong></h6>
                    </Col>
                </Row>
                {calificaciones.map((calificacion) => (
                    <Row key={calificacion.id} className="py-2 d-flex justify-content-between" >
                        <Col xs={9}>
                            <h6 className="pt-2">{calificacion.descripcionNota}</h6>
                        </Col>
                        <Col xs={1} className="px-1">
                            <h6 className="pt-2">{calificacion.calificacion}</h6>
                        </Col>
                    </Row>
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

export default MateriasAlumnoModal;