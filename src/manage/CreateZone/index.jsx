import React from 'react';
import LeafletMap from './LeafletMap';
import CreateZone from './CreateZone';
import styled from 'styled-components';

// import pittsburghDistricts from '../../mockData/Pittsburgh_City_Council_Districts_2012.json';
import pittsburghNeighborhoods from '../../mockData/Neighborhoods_with_SNAP_Data.json';

const StyledCreateZoneContainer = styled.div`
  position: relative;
  display: flex;  
  flex-flow: row wrap;
  width: 100vw;
  height: calc(100vh - 5rem);
  top: 5rem;
`;
export default ({createZone}) => {

  return (
    <StyledCreateZoneContainer>
      <CreateZone createZone={createZone}/>
      <LeafletMap geoJson={pittsburghNeighborhoods} />
    </StyledCreateZoneContainer>
  )
}
