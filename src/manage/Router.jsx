import React from 'react';
import LeafletMap from './LeafletMap';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/`} exact>
        <Link to={`${match.url}/areas`}>Manage Areas</Link>
      </Route>
      <Route path={`${match.url}/areas`}>
        <LeafletMap />
      </Route>
    </Switch>
  );
};