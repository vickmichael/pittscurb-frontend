import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Management from './manage/Router';
import NavBar from './common/NavBar/NavBar';

import ReservationPortalContainer from './containers/ReservationPortalContainer';

export default () => (
  <Router>
    <NavBar />

    <Route path="/" exact>
      <Link to="/manage">Admin App</Link>
      <br />
      <Link to="/reserve">Consumer App</Link>
    </Route>

    <Switch>
      <Route path="/manage">
        <Management />
      </Route>

      <Route path="/reserve">
        <ReservationPortalContainer />
      </Route>
    </Switch>
  </Router>
);
