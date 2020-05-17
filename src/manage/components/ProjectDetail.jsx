import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { LoadingContainer } from '../../common/components';
import useFetch from '../../common/utils/apiHooks';

export default () => {
  const { params: { project }, url } = useRouteMatch('/manage/:project/');
  // list all the regions as clickable tiles, include a button create a new region
  const { loading, response, error } = useFetch(`location/project/${project}`);

  if (error) {
    console.log(error);
    if (error.toString().includes('Unexpected end of JSON input')) {
      return null;
    }
    return (
      <h1>
        Error loading project:
        {project}
      </h1>
    );
  }

  if (loading || !response) {
    return (<LoadingContainer />);
  }

  return (
    <>
      <h1>{ response.projectName }</h1>
      <h2>
        Regions
        &nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="primary"
          to={`${url}new-region/`}
          component={Link}
        >
          Create Region
        </Button>
      </h2>
      <Link to={`${url}415f8e60-4516-48a2-9302-4dce53fd38b6/`}>Davis-land</Link>
    </>
  );
};
