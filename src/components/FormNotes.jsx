import { useState } from "react";
import ErrorAuthMsg from "../components/ErrorAuthMsg";
import { Link } from "react-router-dom";
import "../styles/formNotes.css";

export default function FormNotes(props) {
  const [errorMessage, setErroMessage] = useState("");

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className={`form_container col-10 col-sm-8 col-md-6 col-xl-4 col-xxl-3 box ${props.formButton == "Sign Up" ? "rounded-top" : "rounded"} mt-5 p-4`}>
        <div>
          <h2 className="form_title fw-bold fs-3 text-center mb-4">
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
            <button className="form_btn btn btn-primary col-12 mt-2">
              {props.formButton}
            </button>
            {errorMessage ? <ErrorAuthMsg errorMsg={errorMessage} /> : <></>}
          </form>
        </div>
        <div className="mt-3 text-center">
          {props.formButton === "Sign Up" ? (
            <>
              <p className="form_text ">Already have an account? </p>
              <Link to="/login" className="form_link text-primary">
                Log In
              </Link>
            </>
          ) : (
            <>
              <p className="form_text ">Don't have an account? </p>
              <Link to="/signup" className="form_link text-primary">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
