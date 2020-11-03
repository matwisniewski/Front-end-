import React, { useState, useEffect, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
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
        <div className="sidebar">
          <div>
            <Link to="/test">Zamówienia</Link>
          </div>
          <div>
            <Link to="/NewOrder">Nowe Zamówienia</Link>
          </div>
          <div>
            <Link to="/">Sklepy</Link>
          </div>
        </div>
      )}
      <div className="content">
        <div className="content-items">{props.contentItems}</div>
      </div>
      <BottomNav />
    </>
  );
}

export default PageWrapper;
