import { useState, useEffect } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { useUser } from "../contexts/UserContext.jsx";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { userName, getUserName } = useUser();
  const url = useLocation().pathname;

  const handleChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleChange);
    getUserName();
  }, []);

  return (
    <>
      {screenWidth < 768 ? (
        <div>
          <NavMobile userName={userName} url={url} />
          {children}
        </div>
      ) : (
        <div className="container-fluid row p-0 m-0">
          <NavDesktop userName={userName} url={url} />
          {children}
        </div>
      )}
    </>
  );
}
