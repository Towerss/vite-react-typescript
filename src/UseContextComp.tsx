import React, { useEffect } from "react";
import { useCountContext } from "./store/contextStore";

const UseContextComp = () => {
  const [countX, setCounts] = useCountContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(`Current count: ${countX}`);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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
