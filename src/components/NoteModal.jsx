import { useState, useRef, useEffect } from "react";
import { useNotes } from "../contexts/NoteContext";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { useUser } from "../contexts/UserContext";
import "../styles/noteModal.css";

export default function ModalNote(props) {
  const { userSettings } = useUser();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { updateNote } = useNotes();
  const [isModalOpen, setModalOpen] = useState(false);
  const [note, setNote] = useState({
    id: props.id,
    title: props.title,
    content: props.content,
  });

  const inputTitle = useRef();
  const inputContent = useRef();

  const handleWindowChange = () => {
    setScreenWidth(window.innerWidth);
  };

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

  async function update() {
    await updateNote(note);
    closeModal();
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowChange);
  }, []);

  return (
    <div>
      <button className="btn btn-dark" onClick={() => openModal()}>
        <i className="bi bi-pencil-square fs-5"></i>
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
            color: "#cfcfcf",
            backgroundColor: "#262a2e",
            width: screenWidth <= 500 ? "290px" : "430px",
            margin: "auto",
            borderRadius: "0.375rem",
            height: screenWidth <= 500 ? "570px" : "517.5px",
            border: "none",
            WebkitBoxShadow: "3px 3px 14px 1px rgba(15, 15, 15, 1)",
            MozBoxShadow: "3px 3px 14px 1px rgba(15, 15, 15, 1)",
            BoxShadow: "3px 3px 14px 1px rgba(15, 15, 15, 1)",
            padding: "0",
            overflow: "hidden",
          },
        }}
      >
        <div className="modal_title_container text-center mt-3 mb-2 mx-2 pb-1">
          <h3>Edit Note</h3>
        </div>
        <div className="m-2 mb-2">
          <input
            onChange={(e) => handleChange(e)}
            className="form-control modal_input border-0 mb-2"
            name="title"
            value={note.title}
            ref={inputTitle}
            type="text"
            maxLength="50"
            style={{ fontFamily: userSettings.noteFont }}
          />
          <textarea
            onChange={(e) => handleChange(e)}
            className="form-control modal_input border-0 mb-2"
            name="content"
            value={note.content}
            ref={inputContent}
            rows="14"
            maxLength="1000"
            style={{ fontFamily: userSettings.noteFont }}
          />
        </div>
        <div className="modal_btn_container row m-2 d-flex justify-content-between">
          <button
            onClick={() => update()}
            className="modal_btn btn btn-dark p-2 mb-2"
          >
            Aceptar
          </button>
          <button
            onClick={() => abortUpdateNote()}
            className="modal_btn btn btn-dark p-2 mb-2"
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  );
}

ModalNote.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
