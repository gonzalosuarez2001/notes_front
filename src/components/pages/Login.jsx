import { useState } from "react";
import * as authServices from "../../services/authServices";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="container box rounded shadow-lg mt-3">
      <div className="mt-2">
        <p className="fw-bold fs-3 text-primary text-center">Log In</p>
      </div>
      <div>
        <form onSubmit={(e) => authServices.validateUser(formData, e)}>
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button className="btn btn-primary mb-2 col-12">Log In</button>
        </form>
      </div>
    </div>
  );
}
