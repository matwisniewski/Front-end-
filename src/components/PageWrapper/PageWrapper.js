import React, { useState, useEffect, useContext } from "react";
import globalStateContext from "../../globalContext/globalContext";
import "./PageWrapper.css";
import BottomNav from "../BottomNav/BottomNav";

function PageWrapper(props) {
  const { mobileDispatcher } = useContext(globalStateContext);
  const [isMobile, setIsMobile] = mobileDispatcher;

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <div class="sidebar">
          <a href="#home">Zamówienia</a>
          <a href="#news">Nowe zamówienie</a>
          <a href="#contact">Sklepy</a>
        </div>
      )}
      <div className="content">
        <div class="content-items">{props.contentItems}</div>
      </div>
      <BottomNav />
    </>
  );
}

export default PageWrapper;
