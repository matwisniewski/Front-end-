import React, { useContext, useState, useEffect } from "react";
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
              <div>Zamówienia</div>
            </BottomNavButton>
            <BottomNavButton>
              <div>Nowe zamówienie</div>
            </BottomNavButton>
            <BottomNavButton>
              <div>Sklepy</div>
            </BottomNavButton>
            {isAdmin ? (
              <BottomNavButton>
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
