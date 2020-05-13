import React from 'react';
import { useSelector } from 'react-redux';
import { Polygon } from 'react-leaflet';

export default () => {
  const { draftPolygon, mousePosition } = useSelector(state => state);

  const dynamicPositions = draftPolygon.length ? [...draftPolygon, mousePosition] : [draftPolygon];

  return (
    <Polygon positions={dynamicPositions} />
  );
}