import React from 'react';
import LeafletMap from './LeafletMap';
import CreateZone from './CreateZone'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import CreateZoneContainer from '../containers/CreateZoneContainer';

export default () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/`} exact>
        <Link to={`${match.url}/zones`}>Manage Zones</Link>
        <Link to={`${match.url}/areas`}>Manage Areas</Link>
      </Route>
      <Route path={`${match.url}/zones`} component={CreateZoneContainer} />
      <Route path={`${match.url}/areas`} component={LeafletMap} />

        
    </Switch>
  );
};