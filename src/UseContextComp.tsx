import React from "react";
import { useCountContext } from "./store/contextStore";

const UseContextComp = () => {
  const [countX, setCounts] = useCountContext();

  return (
    <div>
      <p>UseContextComp</p>
      <p>{countX}</p>
      <p>
        <button onClick={() => setCounts((c) => c + 1)}>+1</button>
      </p>
    </div>
  );
};

export default UseContextComp;
