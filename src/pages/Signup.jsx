import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import FormNotes from "../components/FormNotes";
import "../styles/formNotes.css";

export default function Signup() {
  const { createUser } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <FormNotes
      formName="Sign Up in Notes"
      formData={formData}
      formAction={createUser}
    >
      <input
        type="text"
        className="form_notes_input form-control border-0 mb-2"
        placeholder="Name"
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        className="form_notes_input form-control border-0 mb-2"
        placeholder="Username"
        name="username"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="email"
        className="form_notes_input form-control border-0 mb-2"
        placeholder="Email"
        name="email"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        className="form_notes_input form-control border-0 mb-2"
        placeholder="Password"
        name="password"
        onChange={(e) => handleChange(e)}
      />
    </FormNotes>
  );
}
