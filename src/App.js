import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  Suspense,
} from "react";
import dotenv from "dotenv";

import globalStateContext, {
  GlobalStateContextProvider,
  globalStateContextProvider,
} from "../src/globalContext/globalContext";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
/////////////
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import AddOrderPage from "./pages/AddOrderPage/AddOrderPage";
import ShopsPage from "./pages/ShopsPage/ShopsPage";

import AdminPage from "./pages/AdminPage/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
require("dotenv").config();

function App() {
  const GlobalValues = useContext(globalStateContext);
  const [order, setOrder] = useState(2); // nie wiem po co jest ta zmienna chyba do testów
  const [isMobile, setIsMobile] = useState(Boolean); // variable change if we resize the window
  const [username, setUsername] = useState("testUser");
  const [isAdmin, setIsAdmin] = useState(true); //privelage level status

  const updateIfMobile = () => {
    const ifMobile = window.innerWidth < 768 ? true : false;

    setIsMobile(ifMobile);
  };

  useEffect(() => {
    updateIfMobile();
    window.addEventListener("resize", updateIfMobile);
    console.log(isMobile);
  }, [isMobile]);

  return (
    <>
      <GlobalStateContextProvider
        value={{
          mobileDispatcher: [isMobile, setIsMobile],
          privelageLevelDispatcher: [isAdmin, setIsAdmin],
          usernameDispatcher: [username, setUsername],
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact exact path="/" component={LoginPage} />
            <Route exact path="/test" component={HomePage} />
            <Route exact path="/NewOrder" component={AddOrderPage} />
            <Route exact path="/Shops" component={ShopsPage} />
            <Route exact path="/AdminPage" component={AdminPage} />
            <ProtectedRoute exact path="/home" component={HomePage} />
            {/*Protected  route nie działa jeśli user jest zalogowany */}
          </Switch>
        </BrowserRouter>
      </GlobalStateContextProvider>
    </>
  );
}

export default App;
