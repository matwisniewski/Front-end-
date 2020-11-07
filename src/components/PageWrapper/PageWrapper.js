import React, { useState, useEffect, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiBank,
  mdiBookPlusOutline,
  mdiBookOpenOutline,
  mdiAccountCog,
} from "@mdi/js";

import globalStateContext from "../../globalContext/globalContext";
import "./PageWrapper.css";
import BottomNav from "../BottomNav/BottomNav";

function PageWrapper(props) {
  const { mobileDispatcher, privelageLevelDispatcher } = useContext(
    globalStateContext
  );
  const [isMobile, setIsMobile] = mobileDispatcher;
  const [isAdmin, setIsAdmin] = privelageLevelDispatcher;

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <div className="sidebar">
          <div className="sidebarButton">
            <Link to="/test">
              <Icon path={mdiBookOpenOutline} size={"25"} />
              <div className="buttonText"> Zamówienia</div>
            </Link>
          </div>
          <div className="sidebarButton">
            <Link to="/NewOrder">
              <Icon path={mdiBookPlusOutline} size={"25"} />
              <div className="buttonText">Nowe zamówienie</div>
            </Link>
          </div>
          <div className="sidebarButton">
            <Link to="/Shops">
              <Icon path={mdiBank} size={"25"} />
              <div className="buttonText">Sklepy</div>
            </Link>
          </div>
          {isAdmin ? (
            <div className="sidebarButton">
              <Link to="/AdminPage">
                <Icon path={mdiAccountCog} size={"25"} />
                <div className="buttonText">Administrator</div>
              </Link>
            </div>
          ) : (
            <></>
          )}
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
