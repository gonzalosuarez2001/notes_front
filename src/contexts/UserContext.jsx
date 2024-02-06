import { createContext, useContext, useState } from "react";
import * as userServices from "../services/userServices";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userName, setUserName] = useState("");

  async function getUserName() {
    await userServices.getUserName(setUserName);
  }

  return (
    <UserContext.Provider value={{ userName, getUserName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
