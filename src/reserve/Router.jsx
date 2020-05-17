import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';
import ReservationPortal from './components/ReservationPortal/ReservationPortal';
import ReservationSearchPortal from './components/ReservationSearch/ReservationSearchPortal';
import ReviewPortal from './components/ReservationReview/ReviewPortal';
import Confirmation from './components/Confirmation/Confirmation';

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
        <Route path={`${match.url}/`} exact component={ReservationPortal} />
        <Route path={`${match.url}/search`} exact component={ReservationSearchPortal} />
        <Route path={`${match.url}/confirm/:id`} exact component={Confirmation} />
        <Route path={`${match.url}/review`} exact component={ReviewPortal} />
      </Switch>
    </Provider>
  );
};
