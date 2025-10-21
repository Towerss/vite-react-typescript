import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CountContext, PreferencesContext } from "./store/contextStore";
import type { Preferences } from "./store/contextStore";
import UseContextComp from "./UseContextComp";
import UsePrefContextComp from "./UsePrefContextComp";
import FetchUser from "./Components/FetchUser";
import CreatePost from "./Components/CreatePost";

function App() {
  //
  const [count, setCount] = useState(0);

  //
  const [preferences, setPreferences] = useState<Preferences>({
    language: "en",
    theme: "light",
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <p>Use Count Context component</p>
        <CountContext value={[count, setCount]}>
          <UseContextComp />
        </CountContext>
      </div>
      <div>
        <p>Use Preferences Context component</p>
        <PreferencesContext
          value={{
            preferences,
            setPreferences,
          }}
        >
          <UsePrefContextComp />
        </PreferencesContext>
      </div>

      <div>
        <FetchUser />
      </div>
      <div>
        <CreatePost />
      </div>
    </>
  );
}

export default App;
