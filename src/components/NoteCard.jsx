import { useNotes } from "../contexts/NoteContext.jsx";
import PropTypes from "prop-types";
import NoteModal from "./NoteModal.jsx";
import "../styles/noteCard.css";

export default function NoteCard(props) {
  const { deleteNote } = useNotes();

  return (
    <div
      className="noteCard_container col-9 col-lg-5 col-xxl-3 m-3 d-flex flex-column align-items-center text-start rounded"
      key={props.id}
    >
      <div className="container-fluid m-0 px-1 row justify-content-evenly">
        <div className="noteCard_title_container row mb-3 p-0">
          <h3 className="col-8 mt-3 ps-0">{props.title}</h3>
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
          <p>{props.content}</p>
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
