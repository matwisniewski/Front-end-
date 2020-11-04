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
            <Icon path={mdiBookOpenOutline} size={"20"} />
            <Link to="/test">Zamówienia</Link>
          </div>
          <div className="sidebarButton">
            <Icon path={mdiBookPlusOutline} size={"20"} />
            <Link to="/NewOrder">Nowe zamówienie</Link>
          </div>
          <div className="sidebarButton">
            <Icon path={mdiBank} size={"20"} />
            <Link to="/Shops">Sklepy</Link>
          </div>
          {isAdmin ? (
            <Link to="/AdminPage">
              <div className="sidebarButton">
                <Icon path={mdiAccountCog} size={"20"} />
                <Link to="/AdminPage">Administrator</Link>
              </div>
            </Link>
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
