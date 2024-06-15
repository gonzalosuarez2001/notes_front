import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import "../styles/settingsBgCard.css";

export default function SettingsBgCard(props) {
  const { updateUserColor } = useUser();

  return (
    <div
      className={`${
        props.activeBg == props.color ? "activeBg" : ""
      } settingsBgCard_container col-7 col-sm-5 col-lg-3 col-xxl-3 m-3 d-flex flex-column rounded `}
      style={{ backgroundColor: props.color }}
      onClick={() => updateUserColor(props.colorId)}
    >
      {props.activeBg === props.color && (
        <div className="m-auto pb-4">
          <i className="bi bi-check-circle fs-3"></i>
        </div>
      )}
    </div>
  );
}
