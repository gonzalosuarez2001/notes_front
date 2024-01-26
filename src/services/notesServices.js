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
    console.log(error);
  }
}

export async function addNote(note) {
  try {
    if (note.title && note.content) {
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
    console.error("Error:", error);
  }
}

export async function updateNote(note) {
  try {
    if (note.title && note.content) {
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
    }
  } catch (error) {
    console.error("Error:", error);
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
    console.log(error);
  }
}
