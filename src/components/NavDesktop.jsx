import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/navDesktop.css";

export default function NavDesktop(props) {
  const { logOut } = useAuth();

  return (
    <div className="nav_desktop_container col-md-3 col-xxl-2 d-flex flex-column">
      <div>
        <div className="nav_desktop_profile rounded col-12 my-4 text-center p-2">
          <i className="bi bi-person-circle nav_desktop_text me-2 fs-5"></i>
          <h3 className="nav_desktop_inline nav_desktop_text fs-5">
            Hi {props.userName}!
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
      <div className="mt-auto">
        <button
          onClick={() => logOut()}
          className="nav_desktop_btn nav_desktop_btn_logout btn btn-danger col-12 fs-5 text-center mb-4"
        >
          <i className="bi bi-box-arrow-left me-2"></i>
          <h4 className="nav_desktop_inline fw-normal fs-5 ms-2">Log Out</h4>
        </button>
      </div>
    </div>
  );
}
