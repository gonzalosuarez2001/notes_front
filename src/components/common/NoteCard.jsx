import { useContext } from "react";
import { NoteContext } from "../../contexts/NoteContext.jsx";
import PropTypes from "prop-types";
import ModalNote from "../common/ModalNote.jsx";

export default function NoteCard(props) {
  const noteContext = useContext(NoteContext);

  return (
    <div className="border" key={props.id}>
      <p>{props.title}</p>
      <p>{props.content}</p>
      <button
        onClick={() => noteContext.deleteNote(props.id)}
        className="btn btn-danger"
      >
        Eilminar
      </button>
      <ModalNote id={props.id} title={props.title} content={props.content} />
    </div>
  );
}

NoteCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
