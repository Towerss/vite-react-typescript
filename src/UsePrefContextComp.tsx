import React from "react";
import { usePreferencesContext } from "./store/contextStore";

const UsePrefContextComp = () => {
  const { preferences, setPreferences } = usePreferencesContext();

  return (
    <>
      <div>Use Pref Context Comp</div>;
      <p>Current Language: {preferences.language}</p>
      <p>Current Theme: {preferences.theme}</p>
      <button
        onClick={() =>
          setPreferences((preferences) => ({
            ...preferences,
            language: "es",
          }))
        }
      >
        Change Lang to Es
      </button>
    </>
  );
};

export default UsePrefContextComp;
