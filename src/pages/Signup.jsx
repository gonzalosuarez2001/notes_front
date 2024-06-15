import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import FormNotes from "../components/FormNotes";
import "../styles/signup.css";
import "../styles/formNotes.css";

export default function Signup() {
  const { createUser } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <FormNotes
        formName="Sign Up in Notes"
        formButton="Sign Up"
        formData={formData}
        formAction={createUser}
      >
        <input
          type="text"
          className="form_input form-control border-0 mb-2"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          className="form_input form-control border-0 mb-2"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          className="form_input form-control border-0 mb-2"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </FormNotes>
      <div className="container-fluid d-flex justify-content-center">
        <div className="signup_warning col-10 col-sm-8 col-md-6 col-xl-4 col-xxl-3 box rounded-bottom mt-0 py-2 d-flex justify-content-center">
          <i className="bi bi-exclamation-circle"></i>
          <p className="m-0 ms-2">Use a fake email to Sign Up.</p>
        </div>
      </div>
    </>
  );
}
