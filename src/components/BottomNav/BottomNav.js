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
              <Icon path={mdiBookOpenOutline} size={"30"} />

              <div>Zamówienia</div>
            </BottomNavButton>
            <BottomNavButton>
              <Icon path={mdiBookPlusOutline} size={"30"} />
              <div>Nowe zamówienie</div>
            </BottomNavButton>
            <BottomNavButton>
              <Icon path={mdiBank} size={"30"} />
              <div>Sklepy</div>
            </BottomNavButton>
            {isAdmin ? (
              <BottomNavButton>
                <Icon path={mdiCogOutline} size={"30"} />
                <div>Administrator</div>
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
