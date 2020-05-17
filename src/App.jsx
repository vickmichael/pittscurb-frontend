import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import Management from './manage/Router';
import Reservation from './reserve/Router';

export default () => (
  <Router>
    <Route path="/">
      <Reservation />
    </Route>

    <Route path="/manage">
      <Management />
    </Route>
  </Router>
);
