import "../styles/errorAuthMsg.css";

export default function ErrorAuthMsg(props) {
  return (
    <div className="error_msg_text mt-3 align-items-center justify-content-center rounded p-2 d-flex">
      <i className="bi bi-exclamation-circle"></i>
      <p className="m-0 ms-2">{props.errorMsg}</p>
    </div>
  );
}
