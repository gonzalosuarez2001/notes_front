import { useNotes } from "../contexts/NoteContext.jsx";
import PropTypes from "prop-types";
import NoteModal from "./NoteModal.jsx";
import { useUser } from "../contexts/UserContext.jsx";
import { useEffect } from "react";
import "../styles/noteCard.css";

export default function NoteCard(props) {
  const { userSettings, getUserSettings } = useUser();
  const { deleteNote } = useNotes();

  useEffect(() => {
    getUserSettings();
  }, []);

  return (
    <div
      className={`noteCard_container col-11 col-sm-8 col-lg-5 col-xxl-3 m-3 d-flex flex-column align-items-center text-start rounded`}
      style={{ backgroundColor: userSettings.noteColor }}
    >
      <div className="container-fluid m-0 px-1 row justify-content-evenly">
        <div className="noteCard_title_container row mb-3 p-0">
          <h3
            className={`noteCard_font_${userSettings.noteFont} noteCard_title col-8 mt-3 ps-0`}
          >
            {props.title}
          </h3>
          <div className="col-4 justify-content-end pe-0 p-2 d-flex">
            <NoteModal
              id={props.id}
              title={props.title}
              content={props.content}
            />
            <button
              className="noteCard_btn btn btn-dark ms-2"
              onClick={() => deleteNote(props.id)}
            >
              <i className="bi bi-x-lg fs-5"></i>
            </button>
          </div>
        </div>
        <div className="noteCard_text_container ps-0">
          <p className={`noteCard_font_${userSettings.noteFont} noteCard_text`}>
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
