export async function obtenerCalificaciones(materia) {
  try {
    let token = localStorage.getItem("jwt");
    const url = `http://localhost:8080/curso/${materia}/calificaciones`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch(url, params);
    if (response.status === 200) {
      const result = response.json();
      console.log("BIEN");
      return result;
    } else {
      //const result = await response.json();
      console.log("MAL");
      return [];
    }
  } catch (error) {
    console.log(error);
    console.log("MUY MAL");
    return [];
  }
}

export async function modificarCalificacion(calificacion) {
  try {
    let token = localStorage.getItem("jwt");
    const url = `http://localhost:8080/curso/calificaciones`;

    const formData = {
      id: calificacion.id,
      calificacion: calificacion.calificacion,
      descripcionNota: calificacion.descripcionNota,
    };

    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(formData),
    };
    console.log(formData);
    const response = await fetch(url, params);
    if (response.status === 200) {
      //const result = await response.json();
      console.log("BIEN");
      return true;
    } else {
      //const result = await response.json();
      console.log("MAL");
      return false;
    }
  } catch (error) {
    console.log(error);
    console.log("MUY MAL");
    return false;
  }
}
