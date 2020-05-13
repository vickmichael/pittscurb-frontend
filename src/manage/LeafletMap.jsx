import React from 'react';
import { Map, Marker, TileLayer, Polyline, Tooltip } from 'react-leaflet';
import styled from 'styled-components';
import rawCoord from '../mockData/coord-data.json';

import { getParkingSpots } from '../utils/spaceGeneration'

const defaultLatLng = [40.4514974,-79.9902457]; // Pittsburgh strip

const dashes = {
  default: '4'
};

const lineStyles = {
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

const processCoordData = rawCoord.features.map(feat => ({
  ...feat,
  geometry: {
    coordinates: feat.geometry.coordinates.map(longLat => [longLat[1], longLat[0]])
  },
}));

const zoom = 18;

const mapSources = {
  openStreetMap: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    maxNativeZoom: 24,
    attribution: ''
  },
  esriWorldImagery: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",
    maxNativeZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  },
  OpenStreetMap_Mapnik: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxNativeZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  },
  Stamen_TonerHybrid: {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}',
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxNativeZoom: 20,
    ext: 'png'
  },
  Stamen_TonerLabels: {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}',
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxNativeZoom: 20,
  }
};

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

const sourceKeys = ['esriWorldImagery', 'Stamen_TonerLabels'];

export default () => (
  <StyledMap
    id="mapId"
    center={defaultLatLng}
    zoom={zoom}
    zoomControl={false}
  >
    {sourceKeys.map(key => (
      <TileLayer
        maxNativeZoom={mapSources[key].maxNativeZoom}
        maxZoom={22}
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
  </ StyledMap>
);
