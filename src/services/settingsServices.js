const APIURL = import.meta.env.VITE_REACT_API_URL; 

export async function getColorSettings(setColorSettings) {
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
      `${APIURL}/api/settings/colors`,
      requestOptions
    );
    const colorSettings = await res.json();
    setColorSettings(colorSettings);
  } catch (error) {
    console.error("Error al obtener los colores de la configuracion: ", error);
  }
}

export async function getFontSettings(setFontSettings) {
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
      `${APIURL}/api/settings/fonts`,
      requestOptions
    );
    const fontSettings = await res.json();
    setFontSettings(fontSettings);
  } catch (error) {
    console.error("Error al obtener las fuentes de la configuracion: ", error);
  }
}
