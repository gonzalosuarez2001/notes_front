const APIURL = import.meta.env.VITE_REACT_API_URL; 

export async function getUsername(setUsername) {
  try {
    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await fetch(`${APIURL}/api/user`, requestOptions);
    const userInfo = await res.json();
    setUsername(userInfo.username);
  } catch (error) {
    console.error("Error al obtener el nombre de usuario: ", error);
  }
}

export async function getUserSettings(setUserSettings) {
  try {
    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await fetch(
      `${APIURL}/api/settings/user`,
      requestOptions
    );
    const userSettings = await res.json();
    setUserSettings(userSettings);
  } catch (error) {
    console.error("Error al obtener la configuracion del usuario: ", error);
  }
}

export async function updateUserColor(colorId) {
  try {
    const data = { colorId };
    const requestOptions = {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    };
    await fetch(
      `${APIURL}/api/settings/user/color`,
      requestOptions
    );
  } catch (error) {
    console.error(
      "Error al actualizar el color de las notas del usuario: ",
      error
    );
  }
}

export async function updateUserFont(fontId) {
  try {
    const data = { fontId };
    const requestOptions = {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    };
    await fetch(`${APIURL}/api/settings/user/font`, requestOptions);
  } catch (error) {
    console.error(
      "Error al actualizar la fuente de las notas del usuario: ",
      error
    );
  }
}
