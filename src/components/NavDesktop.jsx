import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";
import "../styles/navDesktop.css";

export default function NavDesktop(props) {
  return (
    <div className="nav_desktop_container col-md-3 col-xxl-2 d-flex flex-column">
      <div>
        <div className="nav_desktop_profile rounded col-12 my-4 text-center p-2">
          <i className="bi bi-person-circle nav_desktop_text me-2 fs-5"></i>
          <h3 className="nav_desktop_inline nav_desktop_text fs-5">
            Hi {props.username}!
          </h3>
        </div>
        <div>
          <Link to="/notes">
            <button
              className={`${
                props.url === "/notes" ? "nav_desktop_active" : ""
              } nav_desktop_btn btn-dark btn col-12 fs-5 text-start ps-3 mb-1`}
            >
              <i className="bi bi-clipboard me-2"></i>
              <h4 className="nav_desktop_inline fw-normal fs-5 ms-2">Notes</h4>
            </button>
          </Link>
          <Link to="/settings">
            <button
              className={`${
                props.url === "/settings" ? "nav_desktop_active" : ""
              } nav_desktop_btn btn-dark btn col-12 fs-5 text-start ps-3 mb-1`}
            >
              <i className="bi bi-gear me-2"></i>
              <h4 className="nav_desktop_inline fw-normal fs-5 ms-2">
                Settings
              </h4>
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-auto mb-3">
        <LogOutButton btn_position="center" />
      </div>
    </div>
  );
}
