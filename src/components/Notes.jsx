import { useEffect, useState, useRef } from "react";
import * as services from "../services/notes.js";

export default function Notes() {
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const input = useRef();

  function handleContent(e) {
    setContent(e.target.value);
  }

  async function addNote() {
    await services.addNote(userId, content);
    setContent("");
    input.current.value = "";
    await services.getNotes(userId, setNotes);
  }

  async function deleteNote(id) {
    await services.deleteNote(id);
    await services.getNotes(userId, setNotes);
  }

  useEffect(() => {
    setUserId(sessionStorage.getItem("user_id"));
    services.getNotes(userId, setNotes);
  }, [userId]);

  return (
    <>
      <div>
        <input
          onChange={(e) => handleContent(e)}
          className="form-control"
          type="text"
          name="content"
          id="content"
          placeholder="Escriba Aquí"
          ref={input}
        />
        <button onClick={() => addNote()} className="btn btn-primary">
          Agregar
        </button>

        <div>
          {notes.map((note, index) => {
            return (
              <div className="border" key={index}>
                <p>{note.title}</p>
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
