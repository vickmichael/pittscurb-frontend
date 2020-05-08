import React from 'react';
import { Map, TileLayer, Polyline, Tooltip } from 'react-leaflet';

import styled from 'styled-components';

const defaultLatLng = [40.4514974,-79.9902457]; // Pittsburgh strip

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
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

const sources = ['esriWorldImagery', 'Stamen_TonerLabels'];

export default ({
  coordData,
  lineStyles,
  sourceKeys = sources
}) => {

  return (
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
      {coordData.map((line, i) => (
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
      ))}
    </ StyledMap>
  );
};
