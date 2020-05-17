import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import colors from './common/constants/colors';
import Management from './manage/Router';
import Reservation from './reserve/Router';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
});
export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/manage/" component={Management} />
        <Route path="/" component={Reservation} />
      </Switch>
    </Router>
  </ThemeProvider>
);
