import React from 'react';
import LeafletMap from './components/LeafletMap';

import rawCoord from './mockData/coord-data.json';

const dashes = {
  default: '4'
};

const coordLineStyleMap = {
  'no_parking': {
    color:'red',
    dashArray: null
  },
  'no_stopping': {
    color:'orange',
    dashArray: null
  },
  bus: {
    color:'blue',
    dashArray: dashes.default
  },
  loading: {
    color:'orange',
    dashArray: dashes.default
  },
  'metered_parking': {
    color:'yellow',
    dashArray: null
  },
  commercial: {
    color:'green',
    dashArray: dashes.default
  },
  unrestricted: {
    color:'green',
    dashArray: null
  },
  other: {
    color:'grey',
    dashArray: dashes.default
  },
  passenger: {
    color:'purple',
    dashArray: dashes.default
  },
};

const processCoordData = () => {
  return rawCoord.features.map(feat => ({
    ...feat,
    geometry: {
      coordinates: feat.geometry.coordinates.map(longLat => [longLat[1], longLat[0]])
    },
  }))
};

export default () => (
  <LeafletMap
    coordData={processCoordData()}
    lineStyles={coordLineStyleMap}
  />
);
