export async function createUser(formData, e) {
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
    const res = await fetch(
      `http://localhost:3000/api/auth/signup`,
      requestOptions
    );
    if (res.ok) {
      const tokenData = await res.json();
      const token = tokenData.token;
      localStorage.setItem("token", token);
      window.location.href = "http://localhost:5173/notes";
    } else {
      console.log("Error al crear usuario");
    }
  } catch (error) {
    console.log("Error al enviar el formulario:", error);
    return { success: false, error: "Error al enviar el formulario." };
  }
}

export async function validateUser(formData, e) {
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
    const res = await fetch(
      `http://localhost:3000/api/auth/login`,
      requestOptions
    );
    if (res.ok) {
      const tokenData = await res.json();
      const token = tokenData.token;
      localStorage.setItem("token", token);
      window.location.href = "http://localhost:5173/notes";
    } else {
      console.log("no se pudo");
    }
  } catch (error) {
    console.log("Error al enviar el formulario:", error);
  }
}

export function logOut() {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
  window.location.href = "http://localhost:5173/login";
}
