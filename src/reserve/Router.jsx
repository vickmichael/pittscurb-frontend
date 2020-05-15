import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

import NavBar from '../common/NavBar/NavBar';
import ReservationPortalContainer from './containers/ReservationPortalContainer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
);

export default () => {
  const match = useRouteMatch();

  return (
    <Provider store={store}>
      <NavBar />

      <Switch>
        <Route path={`${match.url}/`} exact>
          <ReservationPortalContainer />
        </Route>
      </Switch>
    </Provider>
  );
};
