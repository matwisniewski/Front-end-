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
      <button>Zaloguj się</button>
    </div>
  );
}

export default LoginForm;
