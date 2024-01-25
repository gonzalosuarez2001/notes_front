import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
