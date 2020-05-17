import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { LoadingContainer } from '../../common/components';
import useFetch from '../../common/utils/apiHooks';

// list all the projects as clickable tiles, include a button create a new project
export default () => {
  const { url } = useRouteMatch();
  const { loading, response, error } = useFetch('location/project/4133fe8f-fb0b-4bc7-b407-c3abeff0afae');

  if (error) {
    return (<h1>Error!</h1>);
  }

  if (loading || !response) {
    return (<LoadingContainer />);
  }

  return (
    <>
      <h1>
        My Projects
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="primary" to={`${url}new-project/`}>New Project</Button>
      </h1>
      <Link to={`${url}${response.projectID}/`}>{response.projectName}</Link>
    </>
  );
};
