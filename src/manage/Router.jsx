import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled from 'styled-components';

import rootReducer from './rootReducer';
import {
  LeafletMap, NavBar, ProjectList, ProjectDetail,
} from './components';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
);

const PageContainer = styled.div`
  position: relative;
  top: 4rem;
  padding: 2rem;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
`;

export default () => {
  const match = useRouteMatch();

  return (
    <Provider store={store}>
      <NavBar />
      <PageContainer>
        <Switch>
          <Route path={`${match.url}/`} exact component={ProjectList} />
          <Route path={`${match.url}/projects/`} exact component={ProjectList} />
          <Route path={`${match.url}/new-project/`} exact />
          <Route path={`${match.url}/:project/`} exact component={ProjectDetail} />
          <Route path={`${match.url}/:project/new-region/`} exact />
          <Route path={`${match.url}/:project/:region/`} exact component={LeafletMap} />
        </Switch>
      </PageContainer>
    </Provider>
  );
};
