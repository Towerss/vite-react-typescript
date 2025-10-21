import { useState, useEffect } from "react";

const FetchUser = () => {
  interface User {
    name: string;
    email: string;
    phone: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!user) {
      (async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );

          if (!response.ok) {
            setErrorMsg(response.statusText ?? response.status);
          }

          const data = await response.json();

          const firstUser = data[0];
          console.log(firstUser);

          setUser(firstUser);
        } catch (error) {
          setErrorMsg(error ? (error as Error).message : "Unkown error");
        }
      })();
    }

    return () => {};
  }, []);

  return (
    <div>
      <p>FetchUser</p>
      {user && (
        <div>
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        </div>
      )}
      {errorMsg}
    </div>
  );
};

export default FetchUser;
