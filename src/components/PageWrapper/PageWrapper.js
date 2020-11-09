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
import {
  SidebarNavigation,
  SidebarButton,
  SidebarButtonText,
  SidebarInfo,
  PageContent,
  PageContentItems,
} from "./PageWrapper.css.js";

import BottomNav from "../BottomNav/BottomNav";

function PageWrapper(props) {
  const {
    mobileDispatcher,
    privelageLevelDispatcher,
    usernameDispatcher,
  } = useContext(globalStateContext);
  const [isMobile, setIsMobile] = mobileDispatcher;
  const [isAdmin, setIsAdmin] = privelageLevelDispatcher;
  const [username, setUsername] = usernameDispatcher;

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <SidebarNavigation>
          <SidebarInfo>{username}</SidebarInfo>
          <Link to="/test">
            <SidebarButton>
              <Icon path={mdiBookOpenOutline} size={"25"} />
              <SidebarButtonText> Zamówienia</SidebarButtonText>
            </SidebarButton>
          </Link>
          <Link to="/NewOrder">
            <SidebarButton>
              <Icon path={mdiBookPlusOutline} size={"25"} />
              <SidebarButtonText>Nowe zamówienie</SidebarButtonText>
            </SidebarButton>
          </Link>
          <Link to="/Shops">
            <SidebarButton>
              <Icon path={mdiBank} size={"25"} />
              <SidebarButtonText>Sklepy</SidebarButtonText>
            </SidebarButton>
          </Link>
          {isAdmin ? (
            <Link to="/AdminPage">
              <SidebarButton>
                <Icon path={mdiAccountCog} size={"25"} />
                <SidebarButtonText>Administrator</SidebarButtonText>
              </SidebarButton>
            </Link>
          ) : (
            <></>
          )}
        </SidebarNavigation>
      )}
      <PageContent>
        <PageContentItems>{props.contentItems}</PageContentItems>
      </PageContent>
      <BottomNav />
    </>
  );
}

export default PageWrapper;
