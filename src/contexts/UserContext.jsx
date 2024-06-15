import { createContext, useContext, useState } from "react";
import * as userServices from "../services/userServices";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [userSettings, setUserSettings] = useState({});

  async function getUsername() {
    await userServices.getUsername(setUsername);
  }

  async function getUserSettings() {
    await userServices.getUserSettings(setUserSettings);
  }

  async function updateUserColor(colorId) {
    await userServices.updateUserColor(colorId);
    await getUserSettings();
  }

  async function updateUserFont(fontId) {
    await userServices.updateUserFont(fontId);
    await getUserSettings();
  }

  return (
    <UserContext.Provider
      value={{
        username,
        getUsername,
        userSettings,
        getUserSettings,
        updateUserColor,
        updateUserFont,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
