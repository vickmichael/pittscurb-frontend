import React from 'react';
import { CircleMarker, Polygon } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const { draftPolygon, mousePosition } = useSelector(state => state);
  const dispatch = useDispatch();

  const dynamicPositions = draftPolygon.length ? [...draftPolygon, mousePosition] : [draftPolygon];
  const finishArea = (evt) => {
    dispatch({ type: 'FINISH_AREA' });
    evt.originalEvent.view.L.DomEvent.stopPropagation(evt);
  };

  return (
    <>
      <Polygon positions={dynamicPositions} />
      {draftPolygon.length > 2 && <CircleMarker color="lightblue" center={draftPolygon[0]} onClick={finishArea} />}
    </>
  );
};
