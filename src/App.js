import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  Suspense,
} from "react";
import dotenv from "dotenv";
import "./App.css";
import globalStateContext, {
  GlobalStateContextProvider,
  globalStateContextProvider,
} from "../src/globalContext/globalContext";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
/////////////
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import AddOrderPage from "./pages/AddOrderPage/AddOrderPage";
import ProtectedRoute from "./components/ProtectedRoute";
require("dotenv").config();

function App() {
  const GlobalValues = useContext(globalStateContext);
  const [order, setOrder] = useState(2); // nie wiem po co jest ta zmienna chyba do testów
  const [isMobile, setIsMobile] = useState(Boolean); // variable change if we resize the window
  const [isAdmin, setIsAdmin] = useState(false); //privelage level status

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
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/test" component={HomePage} />
            <Route path="/NewOrder" component={AddOrderPage} />
            {/* <ProtectedRoute exact path="/home" component={HomePage} /> */}
          </Switch>
        </BrowserRouter>
      </GlobalStateContextProvider>
    </>
  );
}

export default App;
