import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import IndexPage from './pages/index';
import DetailsPage from './pages/details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={IndexPage} />
          <Route path={"/details/:id"} exact component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
