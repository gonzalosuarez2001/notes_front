export async function getNotes(userId, setNotes) {
  try {
    if (userId) {
      const data = await fetch(`http://localhost:3000/api/notes/${userId}`);
      const res = await data.json();
      console.log(res);
      setNotes(res);
      console.log("actualizo")
    }
  } catch (error) {
    console.log(error);
  }
}

export async function addNote(userId, content) {
  try {
    if (content) {
      const data = { content };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      await fetch(`http://localhost:3000/api/notes/${userId}`, requestOptions);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteNote(id) {
  try {
    const data = { id };
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch("http://localhost:3000/api/notes", requestOptions);
  } catch (error) {
    console.log(error);
  }
}
