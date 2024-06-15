import { useState, useEffect } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { useUser } from "../contexts/UserContext.jsx";
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Layout({ children }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { username, getUsername } = useUser();
  const url = useLocation().pathname;
  const { validateAccess } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (validateAccess()) {
      window.addEventListener("resize", handleChange);
      getUsername();
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          {screenWidth < 768 ? (
            <div>
              <NavMobile username={username} url={url} />
              {children}
            </div>
          ) : (
            <div className="container-fluid row p-0 m-0">
              <NavDesktop username={username} url={url} />
              {children}
            </div>
          )}
        </>
      )}
    </>
  );
}
