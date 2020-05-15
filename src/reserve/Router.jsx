import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './rootReducer';
import ReservationPortal from './components/ReservationPortal';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
);

export default () => {
  const match = useRouteMatch();

  return (
    <Provider store={store}>
      <Switch>
        <Route path={`${match.url}/`} exact>
          <ReservationPortal />
        </Route>
      </Switch>
    </Provider>
  );
};
