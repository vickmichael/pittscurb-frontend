import React from 'react';
import LeafletMap from './LeafletMap';
import CreateZone from './CreateZone';
import styled from 'styled-components';


const pittsburghDistricts = require('../../mockData/Pittsburgh_City_Council_Districts_2012.json')
const pittsburghNeighborhoods= require('../../mockData/Neighborhoods_with_SNAP_Data.json')

const StyledCreateZoneContainer = styled.div`
  display: flex;  
  flexflow: row wrap;
  width: 100vw;
  height: calc(100vh - 5rem);
  
`;
export default ({createZone}) => {

  return (
    <StyledCreateZoneContainer>
      <CreateZone createZone={createZone}/>
      <LeafletMap geoJson={pittsburghNeighborhoods} />
    </StyledCreateZoneContainer>
  )
}
