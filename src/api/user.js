export async function logInUser(formData) {
  try {
    const url = `http://localhost:8080/login`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    if (response.status === 200) {
      const result = response.json();
      console.log("BIEN");
      return result;
    } else {
      //const result = await response.json();
      console.log("MAL");
      return null;
    }
  } catch (error) {
    console.log(error);
    console.log("MUY MAL");
    return null;
  }
}

export async function obtenerCursos() {
  try {
    let token = localStorage.getItem("jwt");
    const url = `http://localhost:8080/curso`;
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

export async function obtenerProfesores() {
  try {
    let token = localStorage.getItem("jwt");
    const url = `http://localhost:8080/usuarios/profesores`;
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
