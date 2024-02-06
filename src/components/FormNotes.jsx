import { useState } from "react";
import ErrorAuthMsg from "../components/ErrorAuthMsg";
import "../styles/formNotes.css";

export default function FormNotes(props) {
  const [errorMessage, setErroMessage] = useState("");

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="form_notes_container col-10 col-sm-8 col-md-6 col-xl-4 col-xxl-3 box rounded mt-5 p-4">
        <div>
          <h2 className="form_notes_title fw-bold fs-3 text-center mb-4">
            {props.formName}
          </h2>
        </div>
        <div>
          <form
            onSubmit={(e) =>
              props.formAction(props.formData, e, setErroMessage)
            }
          >
            {props.children}
            <button className="form_notes_btn btn btn-primary col-12">
              Log In
            </button>
            {errorMessage ? <ErrorAuthMsg errorMsg={errorMessage} /> : <></>}
          </form>
        </div>
      </div>
    </div>
  );
}
