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
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      )}
      <div className="content">
        <div className="content-top"></div>
        <div class="content-items">
          <h2>Responsive Sidebar Example</h2>
          <p>
            This example use media queries to transform the sidebar to a top
            navigation bar when the screen size is 700px or less.
          </p>

          <h3>Resize the browser window to see the effect.</h3>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

export default PageWrapper;
