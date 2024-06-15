import { useUser } from "../contexts/UserContext";
import "../styles/settingsFontButton.css";

export default function SettingsFontButton(props) {
  const { updateUserFont } = useUser();

  return (
    <button
      className={`${
        props.activeFont == props.font ? "activeFont" : ""
      } settingsFontButton_btn ${
        props.font
      } col-6 col-md-3 btn btn-dark rounded fs-5 py-2 mx-2 mx-lg-3 mb-3 mb-md-0`}
      onClick={() => updateUserFont(props.fontId)}
    >
      {props.font}
    </button>
  );
}
