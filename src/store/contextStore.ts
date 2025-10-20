import { createContext, useContext } from "react";

// The context holds [count, setCount]
export type CountCtx = readonly [
  number,
  React.Dispatch<React.SetStateAction<number>>
];

// No default value: if someone forgets the provider, we'll throw (easier to debug).
export const CountContext = createContext<CountCtx | null>(null);

export const useCountContext = () => {
  const ctx = useContext(CountContext);

  if (!ctx) {
    throw new Error("useCountContext must be used inside <CountContext ...>");
  }

  return ctx;
};

//#region preferences

// Preferences with read & write
export type Preferences = {
  language: "en" | "es" | "ja";
  theme: "light" | "dark";
};

export type PreferencesCtx = {
  preferences: Preferences;
  setPreferences: React.Dispatch<React.SetStateAction<Preferences>>;
};

export const PreferencesContext = createContext<PreferencesCtx | null>(null);

export const usePreferencesContext = () => {
  const ctx = useContext(PreferencesContext);

  if (!ctx) {
    throw new Error(
      "usePreferences must be used within <PreferencesContext ...>"
    );
  }

  return ctx;
};

//#endregion
