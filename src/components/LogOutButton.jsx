import { useAuth } from "../contexts/AuthContext";
import "../styles/logOutButton.css"

export default function LogOutButton(props) {
    const { logOut } = useAuth();
  return (
    <button
      onClick={() => logOut()}
      className={`text-${props.btn_position} logout_btn btn-dark btn col-12 fs-5 ps-3`}
    >
      <i className="bi bi-box-arrow-left me-2"></i>
      <h4 className="logout_inline fw-normal fs-5 ms-2">Log out</h4>
    </button>
  );
}
