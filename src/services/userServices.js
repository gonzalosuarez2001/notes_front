export async function getUserName(setUserName) {
  try {
    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await fetch(`http://localhost:3000/api/user`, requestOptions);
    const userInfo = await res.json();
    setUserName(userInfo.userName);
  } catch (error) {
    console.error("Error al obtener nombre de usuario: ", error);
  }
}
