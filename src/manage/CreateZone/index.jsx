import React from 'react';
import LeafletMap from './LeafletMap';

const pittsburghDistricts = require('../../mockData/Pittsburgh_City_Council_Districts_2012.json')
const pittsburghNeighborhoods= require('../../mockData/Neighborhoods_with_SNAP_Data.json')

export default () => {

  return (
    <LeafletMap geoJson={pittsburghNeighborhoods} />
  )
}
