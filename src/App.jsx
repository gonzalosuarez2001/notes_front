import { useEffect, useState, useRef } from "react";

function App() {
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(0);

  const input = useRef();

  function handleContent(e) {
    setContent(e.target.value);
  }

  async function addNote(e) {
    try {
      e.preventDefault();
      if (content) {
        const data = { content };
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        const res = await fetch("http://localhost:3000/notes", requestOptions);
        console.log(res);
        setContent("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function deleteNote(id) {
    let data = notes.filter((note) => {
      return note.id != id;
    });
    setNotes(data);
  }

  async function getNotes() {
    const data = await fetch("http://localhost:3000/notes/1");
    const res = await data.json();
    console.log(res);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div>
        <form action="">
          <input
            onChange={(e) => handleContent(e)}
            className="form-control"
            type="text"
            name="content"
            id="content"
            placeholder="Escriba Aquí"
            ref={input}
          />
          <button onClick={(e) => addNote(e)} className="btn btn-primary">
            Agregar
          </button>
        </form>
        <div>
          {notes.map((note, index) => {
            return (
              <div className="border" key={index}>
                <p>{note.id}</p>
                <p>{note.content}</p>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="btn btn-danger"
                >
                  Eilminar
                </button>
                <button className="btn btn-primary">Modificar</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
