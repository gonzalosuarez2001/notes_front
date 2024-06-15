import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import FormNotes from "../components/FormNotes";
import "../styles/formNotes.css";

export default function Login() {
  const { validateUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <FormNotes
      formName="Log In to Notes"
      formButton="Log In"
      formData={formData}
      formAction={validateUser}
    >
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
  );
}
