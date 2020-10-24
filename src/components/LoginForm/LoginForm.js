import React, { useContext, useState, useEffect } from "react";
import globalStateContext from "../../globalContext/globalContext";
import "./LoginForm.css";

function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <div className="form">
      <h1>Zaloguj się !</h1>
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
      <button>Zaloguj </button>
    </div>
  );
}

export default LoginForm;
