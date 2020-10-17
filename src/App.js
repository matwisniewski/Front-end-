import React, { createContext, useCallback, useContext, useState, useEffect, Suspense } from "react";
import "./App.css";
import globalStateContext, {
  GlobalStateContextProvider,
  globalStateContextProvider,
} from "../src/globalContext/globalContext";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
/////////////
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const GlobalValues = useContext(globalStateContext);
  const [order, setOrder] = useState(2);
  const [isMobile, setIsMobile] = useState(Boolean);

  const updateIfMobile = () => {
    const ifMobile = window.innerWidth < 768 ? true : false;

    setIsMobile(ifMobile);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIfMobile);
    console.log(isMobile);
  }, [isMobile]);

  return (
    <>
      <GlobalStateContextProvider value={{ orderDispatcher: [order, setOrder] }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <ProtectedRoute exact path="/home" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </GlobalStateContextProvider>
    </>
  );
}

export default App;
