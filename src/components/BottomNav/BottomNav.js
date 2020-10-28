import React, { useContext, useState, useEffect } from "react";
import globalStateContext from "../../globalContext/globalContext";
import "./BottomNav.css";

function BottomNav() {
  const { mobileDispatcher } = useContext(globalStateContext);
  const [isMobile, setIsMobile] = mobileDispatcher;

  return (
    <>
      {isMobile ? (
        <>
          <div class="navbar">
            <a class="active" href="#">
              Home
            </a>
            <a href="#">Search</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default BottomNav;
