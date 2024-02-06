import { createContext, useContext } from "react";
import * as authServices from "../services/authServices";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  async function createUser(formData, e, setErroMessage) {
    await authServices.createUser(formData, e, setErroMessage);
  }

  async function validateUser(formData, e, setErroMessage) {
    await authServices.validateUser(formData, e, setErroMessage);
  }

  function validateAccess() {
    return authServices.validateAccess();
  }

  function logOut() {
    authServices.logOut();
  }

  return (
    <AuthContext.Provider
      value={{ createUser, validateUser, validateAccess, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
