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
