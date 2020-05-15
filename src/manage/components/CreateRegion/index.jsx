import React from 'react';
import styled from 'styled-components';
import LeafletMap from './LeafletMap';
import CreateRegion from './CreateRegion';

// import pittsburghDistricts from '../../mockData/Pittsburgh_City_Council_Districts_2012.json';
import pittsburghNeighborhoods from '../../../mockData/Neighborhoods_with_SNAP_Data.json';

const StyledCreateRegionContainer = styled.div`
  position: relative;
  display: flex;  
  flex-flow: row wrap;
  width: 100vw;
  height: calc(100vh - 4rem);
  margin: 0 auto;
`;
export default () => (
  <StyledCreateRegionContainer>
    <CreateRegion />
    <LeafletMap geoJson={pittsburghNeighborhoods} />
  </StyledCreateRegionContainer>
);
