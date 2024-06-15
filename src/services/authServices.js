const APIURL = import.meta.env.VITE_REACT_API_URL;

export async function createUser(formData, e, setErrorMessage) {
  e.preventDefault();
  try {
    const data = formData;
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(`${APIURL}/api/auth/signup`, requestOptions);
    if (res.ok) {
      const tokenData = await res.json();
      const token = tokenData.token;
      localStorage.setItem("token", token);
      window.location.href = "http://localhost:5173/notes";
    } else {
      const errorMessage = await res.json();
      setErrorMessage(errorMessage.msg || "Error desconocido");
    }
  } catch (error) {
    console.log("Error al enviar el formulario:", error);
  }
}

export async function validateUser(formData, e, setErrorMessage) {
  e.preventDefault();
  try {
    const data = formData;
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(`${APIURL}/api/auth/login`, requestOptions);
    if (res.ok) {
      const tokenData = await res.json();
      const token = tokenData.token;
      localStorage.setItem("token", token);
      window.location.href = "http://localhost:5173/notes";
    } else {
      const errorMessage = await res.json();
      setErrorMessage(errorMessage.msg || "Error desconocido");
    }
  } catch (error) {
    console.log("Error al enviar el formulario:", error);
    setErrorMessage("Error en la autenticacion");
  }
}

export function logOut() {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
  window.location.href = "http://localhost:5173/login";
}

export function validateAccess() {
  if (!localStorage.getItem("token")) {
    window.location.href = "http://localhost:5173/login";
    return false;
  } else {
    return true;
  }
}
