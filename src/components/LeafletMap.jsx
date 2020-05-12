import React from 'react';
import { useSelector } from 'react-redux';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';


import styled from 'styled-components';

const defaultLatLng = [40.4514974,-79.9902457]; // Pittsburgh strip

const zoom = 15;
const mapSources = {
  openStreetMap: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    maxZoom: 24,
    attribution: ''
  },
  openTopoMap: {
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    maxZoom: 24,
    attribution: "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
  },
  esriWorldImagery: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",
    maxZoom: 24,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  },
  OpenStreetMap_Mapnik: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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

const sources = ["esriWorldImagery"];

export default ({ sourceKeys = sources, geoJson }) => {

  return (
    <StyledMap
      id="mapId"
      center={defaultLatLng}
      zoom={zoom}
      zoomControl={false}
    >
      <GeoJSON key="test" data={geoJson} />
      {sourceKeys.map(key => (
        <TileLayer
          maxZoom={mapSources[key].maxZoom}
          key={key}
          url={mapSources[key].url}
          attribution={false ? mapSources[key].attribution : ''}
        />
      ))}
    </ StyledMap>
  );
};
