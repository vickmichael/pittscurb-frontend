import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// list all the projects as clickable tiles, include a button create a new project
export default () => {
  const { url } = useRouteMatch();

  return (
    <>
      <h1>My Projects</h1>
      <Link to={`${url}/my-basic-parking-project/`}>My Basic Parking Project</Link>
      <br />
      <Link to={`${url}/eastern-restaurants/`}>Eastern-Restaurants</Link>
      <br />
      <Link to={`${url}/fill-the-strip/`}>Fill the Strip!</Link>
    </>
  );
};
