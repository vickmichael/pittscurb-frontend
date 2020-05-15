import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default () => {
  const { params: { project }, url } = useRouteMatch('/manage/:project/');
  // list all the regions as clickable tiles, include a button create a new region

  return (
    <>
      <h1>{ project.replace(/-/g, ' ') }</h1>
      <h2>Regions</h2>
      <Link to={`${url}downtown-cdc/`}>Downtown CDC</Link>
      <br />
      <Link to={`${url}south-oakland-to-glen-hazel/`}>South Oakland to Glen Hazel</Link>
      <br />
      <Link to={`${url}the-polish-strip-hill/`}>The Polish Strip Hill</Link>
      <br/>
      <Link to={`${url}new-region/`}>Create Region</Link>
    </>
  );
};
