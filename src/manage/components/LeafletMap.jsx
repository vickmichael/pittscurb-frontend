import React, { useState, useEffect, useRef } from 'react';
import {
  Map,
  Marker,
  TileLayer,
  Polyline,
  Popup,
  Tooltip,
} from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import rawCoord from '../mockData/coord-data.json';
import { lineStyles, mapSources, zoom as initialZoom } from '../../common/constants/map';
import { getParkingSpots } from '../utils/spaceGeneration';
import { getZoomRadii } from '../utils/zoomRadii'

import DrawingTool from './DrawingTool';
import AreaLayer from './AreaLayer';
import Autocomplete from '../../common/components/Autocomplete';

const defaultLatLng = [40.452403, -79.982003]; // Somewhere in Pittsburgh

const processCoordData = rawCoord.features.map((feat) => ({
  ...feat,
  geometry: {
    coordinates: feat.geometry.coordinates.map((longLat) => [longLat[1], longLat[0]]),
  },
}));

const StyledMap = styled(Map)`
  position: fixed;
  top: 4rem;
  left: 0;
  height: calc(100vh - 4rem);
  width: 100vw;
  z-index: -1;

  & .leaflet-tile-pane {
    filter: grayscale(1) contrast(.5) brightness(1.2);
  }
`;

const StyleInput = styled.div`
form input,select {
  height: 3.125rem;
  padding: .875rem .75rem;
  width: 30rem;
  margin-top: 1rem;
  margin-left: 1rem;
  
  background: #FFFFFF;
  border: 1px solid #BFBFBF;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 1rem;
}
`;

const mapLayerKeys = ['esriWorldImagery', 'Stamen_TonerLabels'];

export default () => {
  const dispatch = useDispatch();
  const loaded = useRef(false);
  const globalStateLocation = useSelector((state) => state.destination);
  const [currentLocation, setCurrentLocation] = useState(defaultLatLng);
  const [places, setPlaces] = useState([]);
  const [zoom, setZoom] = useState(initialZoom)
  const [center, setCenter] = useState([defaultLatLng[0], defaultLatLng[1]]);

  useEffect(() => {
    if (zoom < 20) {
      const location = new google.maps.LatLng(center[0], center[1]) // eslint-disable-line no-undef
      const service = new google.maps.places.PlacesService(document.createElement('div'));  // eslint-disable-line no-undef

      const request = {
        location,
        radius: getZoomRadii(zoom),
        type: ['establishment']
      }

      service.nearbySearch(request, (results, status) => {
        if (status === "OK") {
          setPlaces(results)
          return
        }
        console.log("Error Searching For Nearby Places")
      });
    }
  }, [center, zoom]);


  const handleMouseMove = ({ latlng }) => {
    dispatch({ type: 'UPDATE_MOUSE_POSITION', value: latlng });
  };
  const handleMapClick = ({ latlng }) => {
    dispatch({ type: 'ADD_POLYGON_POINT', value: latlng });
  };
  const handleKeyDown = ({ originalEvent }) => {
    if (originalEvent.code === 'Enter') {
      dispatch({ type: 'FINISH_AREA' });
    }
  };
  const handleViewportChanged = ({ center, zoom }) => {
    setCenter(center)
    setZoom(zoom)
  }

  useEffect(() => {
    if (loaded.current) {
      setCurrentLocation([globalStateLocation.geometry.location.lat(), globalStateLocation.geometry.location.lng()])
    } else {
      loaded.current = true
    }
  }, [globalStateLocation])

  return (
    <>
      <StyleInput>
        <form>
          <Autocomplete placeholder="Search address" />
        </form>
      </StyleInput>
      <StyledMap
        id="mapId"
        center={currentLocation}
        zoom={zoom}
        zoomControl={false}
        onViewportChanged={handleViewportChanged}
        onClick={handleMapClick}
        onMouseMove={handleMouseMove}
        onKeyDown={handleKeyDown}
      >
        {mapLayerKeys.map((key) => (
          <TileLayer
            maxNativeZoom={mapSources[key].maxNativeZoom}
            maxZoom={21}
            ext="png"
            key={key}
            url={mapSources[key].url}
            attribution={false ? mapSources[key].attribution : ''}
            style={{ opacity: 0.1 }}
          />
        ))}

        {places
          ? (places.map((place) => {
            return (
              <Marker position={[
                place.geometry.location.lat(),
                place.geometry.location.lng()]}
              >
                <Popup>
                  <span>name: {place.name}</span><br />
                  <span>status: {place.business_status}</span><br />
                  <span>type: {place.types.map(type => <span key={type}> {type} </span>)}</span>
                </Popup>
              </Marker>
            )
          }))
          : null
        }

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
                  {Object.keys(line.properties).map((property) => (
                    <div key={property}>
                      <span>
                        {property}
                      :
                      {' '}
                      </span>
                      <span>{line.properties[property]}</span>
                    </div>
                  ))}
                </Tooltip>
              </Polyline>
              {spots.length
                ? (
                  lineStyles[line.properties.category].color === 'green'
                  || lineStyles[line.properties.category].color === 'yellow'
                ) && spots.map((spot, ind) => (
                  <Marker key={`spot${ind}`} position={spot} />
                )) : null}
            </>
          );
        })}

        <DrawingTool />
        <AreaLayer />
      </StyledMap>
    </>
  );
};
