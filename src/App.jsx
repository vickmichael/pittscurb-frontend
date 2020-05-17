import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import { FourOhFour } from './common/components';

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

    <Route path="*">
      <FourOhFour />
    </Route>
  </Router>
);
