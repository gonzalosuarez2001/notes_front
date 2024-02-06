import { useState } from "react";
import { useNotes } from "../contexts/NoteContext.jsx";
import "../styles/noteEmptyCard.css";

export default function NoteEmptyCard() {
  const { addNote } = useNotes();
  const [note, setNote] = useState({ title: "New Note", content: "" });

  return (
    <div
      onClick={() => addNote(note)}
      className="noteEmptyCard_container col-9 col-lg-5 col-xxl-3 m-3 d-flex flex-column align-items-center justify-content-center rounded"
    >
      <div className="text-center mb-5">
        <p className="fs-5">Add a new note</p>
        <i className="bi bi-plus-square fs-2"></i>
      </div>
    </div>
  );
}
