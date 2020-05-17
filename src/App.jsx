import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Management from './manage/Router';
import Reservation from './reserve/Router';

export default () => (
  <Router>
    <Switch>
      <Route path="/manage/" component={Management} />
      <Route path="/" component={Reservation} />
    </Switch>
  </Router>
);
