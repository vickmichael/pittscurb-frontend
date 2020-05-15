import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { useDispatch } from 'react-redux';

export default ({ parkingAreas }) => {
  const { areas, draftPolygon } = parkingAreas;
  // const areas = useSelector(state => state.areas);
  // const draftPolygon = useSelector(state => state.draftPolygon);
  const dispatch = useDispatch();

  const handleAreaClick = (evt) => {
    // the following if-statement allows clicks to pass through the polygon
    // if they're drawing an area, and suppresses the Popup while drawing
    if (!draftPolygon.length) {
      evt.originalEvent.view.L.DomEvent.stopPropagation(evt);
    }
  };

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_AREA', value: index });
  };

  return areas.map((area, i) => (
    <Polygon key={`area${i}`} color="green" positions={area} onClick={handleAreaClick}>
      <Popup>
        <h3>Spaces</h3>
        <span>Suggested max: 13</span>
        <br />
        <input defaultValue={11} type="number" />
        <br />
        <button type="button" onClick={() => handleDelete(i)}>DELETE</button>
      </Popup>
    </Polygon>
  ));
};
