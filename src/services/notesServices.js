export async function getNotes(setNotes) {
  try {
    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const res = await fetch(`http://localhost:3000/api/notes`, requestOptions);
    if (res.ok) {
      const notes = await res.json();
      setNotes(notes);
    }
  } catch (error) {
    console.error("Error al obtener notas: ", error);
  }
}

export async function addNote(note) {
  try {
    if (note.title) {
      const data = { note };
      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      };
      await fetch(`http://localhost:3000/api/notes`, requestOptions);
    }
  } catch (error) {
    console.error("Error al agregar nota: ", error);
  }
}

export async function updateNote(note) {
  try {
    const data = { note };
    const requestOptions = {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    };
    await fetch(`http://localhost:3000/api/notes`, requestOptions);
  } catch (error) {
    console.error("Error al actualizar nota: ", error);
  }
}

export async function deleteNote(id) {
  try {
    const data = { id };
    const requestOptions = {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    };
    await fetch("http://localhost:3000/api/notes", requestOptions);
  } catch (error) {
    console.log("Error al eliminar nota: ", error);
  }
}
