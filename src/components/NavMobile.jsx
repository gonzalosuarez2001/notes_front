import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LogOutButton from "./LogOutButton";
import "../styles/navMobile.css";

export default function Nav(props) {
  const [navbar, setNavbar] = useState({});

  useEffect(() => {
    const offcanvasNavbar = new bootstrap.Offcanvas(
      document.getElementById("offcanvasDarkNavbar")
    );
    setNavbar(offcanvasNavbar);
  }, []);

  return (
    <nav className="nav_mobile_container navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="nav_mobile_text fs-4 navbar-brand ps-2" href="#">
          Notes App
        </a>
        <button
          className="navbar-toggler fs-4 border-0 pe-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="nav_mobile_options offcanvas offcanvas-top text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-body">
            <div className="nav_mobile_profile rounded col-12 mt-2 mb-3 text-center p-2">
              <i className="bi bi-person-circle nav_mobile_text me-2 fs-5"></i>
              <h3 className="nav_mobile_inline nav_mobile_text fs-5 ms-2">
                Hi {props.username}!
              </h3>
            </div>
            <div>
              <Link to="/notes">
                <button
                  onClick={() => navbar.hide()}
                  className={`${
                    props.url === "/notes" ? "nav_mobile_active" : ""
                  } nav_mobile_btn btn-dark btn col-12 fs-5 text-start ps-3 mb-2`}
                >
                  <i className="bi bi-clipboard me-2"></i>
                  <h4 className="nav_mobile_inline fw-normal fs-5 ms-2">
                    Notes
                  </h4>
                </button>
              </Link>
              <Link to="/settings">
                <button
                  onClick={() => navbar.hide()}
                  className={`${
                    props.url === "/settings" ? "nav_mobile_active" : ""
                  } nav_mobile_btn btn-dark btn col-12 fs-5 text-start ps-3 mb-2`}
                >
                  <i className="bi bi-gear me-2"></i>
                  <h4 className="nav_mobile_inline fw-normal fs-5 ms-2">
                    Settings
                  </h4>
                </button>
              </Link>
            </div>
            <div>
              <LogOutButton btn_position="start" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
