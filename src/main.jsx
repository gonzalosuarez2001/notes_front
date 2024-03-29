import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
