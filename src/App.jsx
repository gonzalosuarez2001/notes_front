import { useEffect, useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(0);

  const input = useRef();

  function handleText(e) {
    setText(e.target.value);
  }

  function addNote(e) {
    e.preventDefault();
    if (text) {
      let note = text;
      setNotes([...notes, { id: id, content: text }]);
      setId(id + 1);
      input.current.value = "";
      setText("");
    }
  }

  function deleteNote(id) {
    let data = notes.filter((note) => {
      return note.id != id;
    });
    setNotes(data);
  }

  async function getNotes() {
    const data = await fetch("http://localhost:3000/notes");
    const res = await data.json();
    console.log(res);
  }

  useEffect(() => {
    getNotes();
  },[])

  return (
    <>
      <div>
        <form action="">
          <input
            onChange={(e) => handleText(e)}
            className="form-control"
            type="text"
            name="text"
            id="text"
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
