import React from 'react';
import LeafletMap from './LeafletMap';

const pittsburghDistricts = require('../../mockData/Pittsburgh_City_Council_Districts_2012.json')

const createZone = () => {
  return (
    <LeafletMap geoJson={pittsburghDistricts} />
  )
}

export default createZone;