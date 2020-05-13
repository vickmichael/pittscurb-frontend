import React from 'react';
import {
  Map,
  Marker,
  TileLayer,
  Polyline,
  Tooltip
} from 'react-leaflet';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import rawCoord from '../mockData/coord-data.json';
import { lineStyles, mapSources, zoom } from '../constants/map';
import { getParkingSpots } from '../utils/spaceGeneration'
import DrawingTool from './DrawingTool';

const defaultLatLng = [40.4514974,-79.9902457]; // Somewhere in Pittsburgh

const processCoordData = rawCoord.features.map(feat => ({
  ...feat,
  geometry: {
    coordinates: feat.geometry.coordinates.map(longLat => [longLat[1], longLat[0]])
  },
}));

const StyledMap = styled(Map)`
  position: fixed;
  top: 5rem;
  left: 0;
  height: calc(100vh - 5rem);
  width: 100vw;
  z-index: -1;

  & .leaflet-tile-pane {
    filter: grayscale(1) contrast(.5) brightness(1.2);
  }
`;

const mapLayerKeys = ['esriWorldImagery', 'Stamen_TonerLabels'];

export default () => {
  const dispatch = useDispatch();

  const handleMapClick = ({ latlng }) => {
    dispatch({type: 'ADD_POLYGON_POINT', value: latlng});
  };

  return (
    <StyledMap
      id="mapId"
      center={defaultLatLng}
      zoom={zoom}
      zoomControl={false}
      onClick={handleMapClick}
    >
      {mapLayerKeys.map(key => (
        <TileLayer
          maxNativeZoom={mapSources[key].maxNativeZoom}
          maxZoom={21}
          ext="png"
          key={key}
          url={mapSources[key].url}
          attribution={false ? mapSources[key].attribution : ''}
          style={{opacity: 0.1}}
        />
      ))}
      {processCoordData.map((line, i) => {
        const spots = getParkingSpots(line, 0);

        return (
          <>
            <Polyline
              key={`line${i}`}
              weight={8}
              lineCap="square"
              dashArray={lineStyles[line.properties.category].dashArray}
              color={lineStyles[line.properties.category].color}
              positions={[line.geometry.coordinates]}
            >
              <Tooltip>
                {Object.keys(line.properties).map(property => (
                  <div><span>{property}: </span><span>{line.properties[property]}</span></div>
                ))}
              </Tooltip>
            </Polyline>
            {spots.length ?
              (lineStyles[line.properties.category].color==='green' || lineStyles[line.properties.category].color==='yellow') &&
              spots.map(spot => (
                <Marker position={spot} />
              )) : null
            }
          </>
        );
      })}
      <DrawingTool />
    </ StyledMap>
  );
};
