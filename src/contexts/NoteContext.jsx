import { createContext, useContext, useState } from "react";
import * as notesServices from "../services/notesServices";

export const NoteContext = createContext();

export function NoteContextProvider({ children }) {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    await notesServices.getNotes(setNotes);
  }

  async function addNote(note) {
    await notesServices.addNote(note);
    await notesServices.getNotes(setNotes);
  }

  async function updateNote(note) {
    await notesServices.updateNote(note);
    await notesServices.getNotes(setNotes);
  }

  async function deleteNote(id) {
    await notesServices.deleteNote(id);
    await notesServices.getNotes(setNotes);
  }

  return (
    <NoteContext.Provider
      value={{ getNotes, addNote, updateNote, deleteNote, notes }}
    >
      {children}
    </NoteContext.Provider>
  );
}
