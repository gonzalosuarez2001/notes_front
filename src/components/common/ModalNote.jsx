import React, { useState, useRef } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import * as notesServices from "../../services/notesServices.js";

export default function ModalNote(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [note, setNote] = useState({
    id: props.id,
    title: props.title,
    content: props.content,
  });

  const inputTitle = useRef();
  const inputContent = useRef();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function handleChange(e) {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  function abortUpdateNote() {
    setNote({ ...note, title: props.title, content: props.content });
    closeModal();
  }

  async function updateNote() {
    await notesServices.updateNote(note);
    //setNote({ ...note, title: "", content: "" });
    inputTitle.current.value = "";
    inputContent.current.value = "";
    closeModal();
    await notesServices.getNotes(props.setNotes);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => openModal()}>
        Modificar
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo de Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            color: "#000",
            backgroundColor: "#fff",
            width: "75%",
            margin: "auto",
            borderRadius: "15px",
            height: "500px",
          },
        }}
      >
        <input
          onChange={(e) => handleChange(e)}
          className="form-control"
          name="title"
          value={note.title}
          ref={inputTitle}
        />
        <input
          onChange={(e) => handleChange(e)}
          className="form-control"
          name="content"
          value={note.content}
          ref={inputContent}
        />
        <button onClick={() => abortUpdateNote()} className="btn btn-danger">
          Cancelar
        </button>
        <button onClick={() => updateNote()} className="btn btn-primary">
          Aceptar
        </button>
      </Modal>
    </div>
  );
}

ModalNote.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
