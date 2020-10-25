import React, { useContext, useState, useEffect } from "react";
import globalStateContext from "../../globalContext/globalContext";

import "./LoginForm.css";

function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const handleLogin = async () => {
    const url = process.env.REACT_APP_API_URL;

    const userInfo = {
      Password: password,
      User: user,
    };

    const data = {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, data);
    if (!response.ok) throw Error(response.message);

    try {
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="form">
      <img
        src="https://www.klapec.pl/images/design/logo.png"
        width="200"
        height="141"
      />
      <input
        id="user"
        placeholder="Użytkownik"
        type="text"
        onChange={(e) => setUser(e.target.value)}
        required=""
      />
      <input
        id="password"
        placeholder="Hasło"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required=""
      />
      <button onClick={() => handleLogin()}>Zaloguj się</button>
      {errorMessage ? (
        <>
          <p>Wystąpił błąd logowania</p>
        </>
      ) : (
        <></>
      )}
      {loadingData ? (
        <>
          <p>Ładowanie...</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LoginForm;
