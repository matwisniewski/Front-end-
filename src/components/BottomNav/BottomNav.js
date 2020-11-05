import React, { useContext, useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiBank,
  mdiBookPlusOutline,
  mdiBookOpenOutline,
  mdiCogOutline,
} from "@mdi/js";
import globalStateContext from "../../globalContext/globalContext";
import { BottomNavigation, BottomNavButton } from "./BottomNav.css.js";
import "./BottomNav.css";

function BottomNav() {
  const { mobileDispatcher } = useContext(globalStateContext);
  const { privelageLevelDispatcher } = useContext(globalStateContext);
  const [isMobile, setIsMobile] = mobileDispatcher;
  const [isAdmin, setIsAdmin] = privelageLevelDispatcher;

  return (
    <>
      {isMobile ? (
        <>
          <BottomNavigation>
            <BottomNavButton>
              <Link to="/test">
                <Icon path={mdiBookOpenOutline} size={"30"} />

                <div>Zamówienia</div>
              </Link>
            </BottomNavButton>
            <BottomNavButton>
              <Link to="/NewOrder">
                <Icon path={mdiBookPlusOutline} size={"30"} />
                <div>Nowe zamówienie</div>
              </Link>
            </BottomNavButton>
            <BottomNavButton>
              <Link to="/Shops">
                <Icon path={mdiBank} size={"30"} />
                <div>Sklepy</div>
              </Link>
            </BottomNavButton>
            {isAdmin ? (
              <BottomNavButton>
                <Link to="/AdminPage">
                  <Icon path={mdiCogOutline} size={"30"} />
                  <div>Administrator</div>
                </Link>
              </BottomNavButton>
            ) : (
              <></>
            )}
          </BottomNavigation>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default BottomNav;
