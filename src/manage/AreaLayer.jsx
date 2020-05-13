import React from 'react';
import { Polygon } from 'react-leaflet';
import { useSelector } from 'react-redux';

export default () => {
  const areas = useSelector(state => state.areas);

  return areas.map(area => <Polygon color="green" positions={area} onClick={evt => evt.originalEvent.stopPropagation()} />)
};
