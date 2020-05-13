import React from 'react';
import { useSelector } from 'react-redux';
import { Polygon } from 'react-leaflet';

export default () => {
  const draftPolygon = useSelector(state => state.draftPolygon);
  console.log(draftPolygon);

  return (
    <Polygon positions={draftPolygon} />
  );
}