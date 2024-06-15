import { createContext, useContext, useState } from "react";
import * as settingsServices from "../services/settingsServices";

export const SettingsContext = createContext();

export function SettingsContextProvider({ children }) {
  const [colorSettings, setColorSettings] = useState([]);
  const [fontSettings, setFontSettings] = useState([]);

  async function getColorSettings() {
    await settingsServices.getColorSettings(setColorSettings);
  }

  async function getFontSettings() {
    await settingsServices.getFontSettings(setFontSettings);
  }

  return (
    <SettingsContext.Provider
      value={{
        colorSettings,
        fontSettings,
        getColorSettings,
        getFontSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
