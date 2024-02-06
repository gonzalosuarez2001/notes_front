import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNotes } from "../contexts/NoteContext.jsx";
import NoteCard from "../components/NoteCard.jsx";
import NoteEmptyCard from "../components/NoteEmptyCard.jsx";
import "../styles/notes.css";

export default function Notes() {
  const { validateAccess } = useAuth();
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    if (validateAccess()) {
      getNotes();
    }
  }, []);

  return (
    <div className="notes_container col-md-9 col-xxl-10">
      <div>
        <div className="container-fluid m-0 row d-flex justify-content-center my-4">
          {notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
              />
            );
          })}
          {notes.length >= 6 ? <div></div> : <NoteEmptyCard />}
        </div>
      </div>
    </div>
  );
}
