import { useState} from "react";
import * as authServices from "../../services/authServices";

export default function Signup() {
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
    <div className="container box rounded shadow-lg mt-3">
      <div className="mt-2">
        <p className="fw-bold fs-3 text-primary text-center">Sign Up</p>
      </div>
      <div>
        <form onSubmit={(e) => authServices.createUser(formData, e)}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
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
          <button className="btn btn-primary mb-2 col-12">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
