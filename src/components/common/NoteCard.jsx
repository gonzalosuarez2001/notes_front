import PropTypes from "prop-types";
import * as notesServices from "../../services/notesServices.js";
import ModalNote from "../common/ModalNote.jsx";

export default function NoteCard(props) {
  async function deleteNote(id) {
    await notesServices.deleteNote(id);
    await notesServices.getNotes(props.setNotes);
  }

  return (
    <div className="border" key={props.id}>
      <p>{props.title}</p>
      <p>{props.content}</p>
      <button onClick={() => deleteNote(props.id)} className="btn btn-danger">
        Eilminar
      </button>
      <ModalNote
        id={props.id}
        title={props.title}
        content={props.content}
        setNotes={props.setNotes}
      />
    </div>
  );
}

NoteCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
