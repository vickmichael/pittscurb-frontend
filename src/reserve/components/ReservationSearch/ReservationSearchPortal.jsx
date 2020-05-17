import React from 'react';
import styled from 'styled-components';
import { Card, Button } from '@material-ui/core';

import {
  Map,
  GeoJSON,
  TileLayer,
} from 'react-leaflet';

import { Link } from 'react-router-dom';
import areas from '../../mockData/areas';
import { SearchControls } from './ReservationSearchPortalStyles';

import Autocomplete from '../ReservationPortal/Autocomplete';
import TimeSelect from '../ReservationPortal/TimeSelect';

import { mapSources, zoom } from '../../../common/constants/map';

const StyledMap = styled(Map)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  & .leaflet-tile-pane {
    filter: grayscale(1) contrast(.5) brightness(1.2);
  }
`;

const BottomControls = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  width: 100%;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;

  /* need gradient */
`;

const Carousel = styled.div`
  height: 10rem; /* this should be auto - reviewer please call me out on this */
  overflow: hidden;
  white-space: nowrap;
`;

const CarouselItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;

  & > * { height: 100%; padding: 1rem; } /* delet this */
`;

const ButtonContainer = styled.div`
  padding: 1rem;

  & > * {
    width: 100%;
    display: block !important;
    text-align: center;
    text-transform: capitalize !important;
  }
`;

export default () => {
  const mapLayerKeys = ['openStreetMap'];
  const defaultMapCenter = [40.46575, -79.9492972, 17];

  return (
    <div>

      <BottomControls>
        <Carousel>
          {areas.map(({
            pricePerSession,
            timesAvailable: { startTime, endTime },
            spaces,
            maxDurationMinutes,
            areaId,
          }) => (
            <CarouselItem key={areaId}>
              <Card elevation={5}>
                <div>
                  $
                  {pricePerSession}
                </div>
                <div>Available from</div>
                <div>
                  {startTime}
                  {' '}
                  -
                  {' '}
                  {endTime}
                </div>
                <div>
                  {maxDurationMinutes}
                  {' '}
                  min. max
                </div>
                <div>
                  {spaces}
                  {' '}
                  spots free
                </div>
              </Card>
            </CarouselItem>
          ))}
        </Carousel>
        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/review"
          >
            Continue to reserve
          </Button>
        </ButtonContainer>
      </BottomControls>

      <SearchControls>
        <form>
          <Autocomplete />
          <TimeSelect />
        </form>
      </SearchControls>

      <StyledMap
        id="mapId"
        center={defaultMapCenter}
        zoom={zoom}
        zoomControl={false}
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

        {areas.map(({ geojson }) => (
          <GeoJSON color="purple" data={geojson} />
        ))}
      </StyledMap>
    </div>
  );
};
