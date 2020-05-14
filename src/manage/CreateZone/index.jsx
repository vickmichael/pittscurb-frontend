import React from 'react';
import LeafletMap from './LeafletMap';
import CreateZone from './CreateZone';
import {  Button }  from '@material-ui/core';
import styled from 'styled-components';


const pittsburghDistricts = require('../../mockData/Pittsburgh_City_Council_Districts_2012.json')
const pittsburghNeighborhoods= require('../../mockData/Neighborhoods_with_SNAP_Data.json')

const CreateZoneContainer = styled.div`
  display: flex;  
  flexflow: row wrap;
`;
export default () => {

  return (
    <CreateZoneContainer>
      <CreateZone/>
      <LeafletMap geoJson={pittsburghNeighborhoods} />
    </CreateZoneContainer>
  )
}
