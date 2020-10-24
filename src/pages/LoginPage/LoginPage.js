import React, { useContext, useState, useEffect } from "react";
import globalStateContext from "../../globalContext/globalContext";
import "./LoginPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  const { mobileDispatcher } = useContext(globalStateContext);
  const [isMobile, setIsMobile] = mobileDispatcher;
  const url = process.env.API_URL;

  return (
    <>
      {isMobile ? (
        <div style={{ height: "100vh", width: "100vw" }}>
          <LoginForm />
        </div>
      ) : (
        <div className="page">
          <div className="left-half">
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src="https://images.pexels.com/photos/1853010/pexels-photo-1853010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
          <div className="right-half">
            <LoginForm />
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
