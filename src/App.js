import React from 'react';
import LeafletMap from './components/LeafletMap';

import rawCoord from './mockData/coord-data.json';

const processCoordData = () => {
  return rawCoord.features.map(feat => ({
    ...feat,
    geometry: {
      coordinates: feat.geometry.coordinates.map(longLat => [longLat[1], longLat[0]])
    },
  }))
};

export default () => (
  <LeafletMap coordData={processCoordData()} />
);
