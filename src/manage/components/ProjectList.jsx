import React from 'react';
import { Link } from 'react-router-dom';

// list all the projects as clickable tiles, include a button create a new project
export default () => (
  <>
    <h1>My Projects</h1>
    <Link to="my-basic-parking-project/">My Basic Parking Project</Link>
    <br />
    <Link to="eastern-restaurants/">Eastern-Restaurants</Link>
    <br />
    <Link to="fill-the-strip/">Fill the Strip!</Link>
  </>
);
