import { useEffect, useState } from "react";
import { useNotes } from "../contexts/NoteContext.jsx";
import NoteCard from "../components/NoteCard.jsx";
import NoteEmptyCard from "../components/NoteEmptyCard.jsx";
import Loading from "../components/Loading.jsx";
import "../styles/notes.css";

export default function Notes() {
  const [loading, setLoading] = useState(true);
  const { notes, getNotes } = useNotes();

  async function fetchNotes() {
    await getNotes();
    setLoading(false);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="notes_container col-md-9 col-xxl-10">
      {loading ? (
        <Loading thingLoading="Notes" />
      ) : (
        <div className="container-fluid mx-0 row d-flex justify-content-center my-4">
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
      )}
    </div>
  );
}
