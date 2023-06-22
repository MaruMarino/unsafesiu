export async function getMaterias() {
    try {
        const url = `http://localhost:8080/materia`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
        };
        const response = await fetch(url, params);
        if (response.status === 200) {
            const result = response.json();
            return result;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function obtenerCalificacionesPorAlumno(materia) {
    try {
        let token = localStorage.getItem("jwt");
        const url = `http://localhost:8080/materia/${materia}/calificaciones`;
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
            return result;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}