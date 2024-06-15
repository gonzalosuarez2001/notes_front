import { useEffect, useState } from "react";
import SettingsBgCard from "../components/SettingsBgCard";
import SettingsFontButton from "../components/SettingsFontButton";
import { useUser } from "../contexts/UserContext";
import { useSettings } from "../contexts/SettingsContext";
import Loading from "../components/Loading.jsx";
import "../styles/settings.css";

export default function Settings() {
  const [loading, setLoading] = useState(true);
  const { userSettings, getUserSettings } = useUser();
  const { getColorSettings, getFontSettings, colorSettings, fontSettings } =
    useSettings();

  async function fetchSettings() {
    await getColorSettings();
    await getFontSettings();
    await getUserSettings();
    setLoading(false);
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <>
      {loading ? (
        <div className="settings_container col-md-9 col-xxl-10">
          <Loading thingLoading="Settings" />
        </div>
      ) : (
        <div className="settings_container col-md-9 col-xxl-10 d-flex align-items-center flex-column">
          <div className="col-12 col-md-11 col-lg-11 col-xxl-8 mb-5 mt-5">
            <div className="mx-5 mx-md-0">
              <h3 className="settings_title pb-3">Note Background</h3>
            </div>
            <div className=" m-0 row d-flex justify-content-center my-4">
              {colorSettings.map((color, index) => {
                return (
                  <SettingsBgCard
                    color={color.color}
                    colorId={color.colorId}
                    activeBg={userSettings.noteColor}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-11 col-lg-11 col-xxl-8 mb-5">
            <div className="mx-5 mx-md-0">
              <h3 className="settings_title pb-3">Note Font</h3>
            </div>
            <div className="d-flex justify-content-center my-5">
              <p
                className={`settings_font_${userSettings.noteFont} settings_text fs-4`}
              >
                This is an example text.
              </p>
            </div>
            <div className="row d-flex justify-content-center m-0">
              {fontSettings.map((font, index) => {
                return (
                  <SettingsFontButton
                    font={font.font}
                    fontId={font.fontId}
                    activeFont={userSettings.noteFont}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
