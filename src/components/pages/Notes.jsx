import { useEffect, useState, useRef, useContext } from "react";
import * as authServices from "../../services/authServices";
import { NoteContext } from "../../contexts/NoteContext.jsx";
import NoteCard from "../common/NoteCard.jsx";

export default function Notes() {
  const noteContext = useContext(NoteContext);
  const [note, setNote] = useState({ title: "", content: "" });

  const inputTitle = useRef();
  const inputContent = useRef();

  function handleChange(e) {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  async function addNote() {
    await noteContext.addNote(note);
    setNote({ title: "", content: "" });
    inputTitle.current.value = "";
    inputContent.current.value = "";
  }

  useEffect(() => {
    noteContext.getNotes();
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => authServices.logOut()}
          className="btn btn-danger"
        >
          Cerrar Sesión
        </button>
        <input
          onChange={(e) => handleChange(e)}
          className="form-control"
          type="text"
          name="title"
          id="title"
          placeholder="Escriba Aquí"
          ref={inputTitle}
        />
        <input
          onChange={(e) => handleChange(e)}
          className="form-control"
          type="text"
          name="content"
          id="content"
          placeholder="Escriba Aquí"
          ref={inputContent}
        />
        <button onClick={() => addNote()} className="btn btn-primary">
          Agregar
        </button>

        <div>
          {noteContext.notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
