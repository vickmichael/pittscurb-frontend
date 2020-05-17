import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Management from './manage/Router';
import Reservation from './reserve/Router';

export default () => (
  <Router>
    <Route path="/" exact>
      <Reservation />
    </Route>

    <Route path="/manage">
      <Management />
    </Route>
  </Router>
);
