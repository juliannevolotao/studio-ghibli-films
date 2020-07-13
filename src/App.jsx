import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import IndexPage from "./pages/Index";
import DetailsPage from "./pages/Details";
import NotFoundPage from "./pages/NotFound";
import ErrorPage from "./pages/Error";

import HeaderComponent from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Switch>
            <Route path={"/"} exact component={IndexPage} />
            <Route path={"/details/:id"} exact component={DetailsPage} />
            <Route path={"/error"} exact component={ErrorPage} />
            <Route path={"/*"} exact component={NotFoundPage} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
