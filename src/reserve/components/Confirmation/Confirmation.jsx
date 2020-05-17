import React from 'react';
import Icon from '@mdi/react';
import { mdiPhone, mdiChat, mdiDirections } from '@mdi/js';
import {
  useParams,
} from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import {
  Bullets,
  Container,
  Description,
  Header,
  InfoContainer,
  MiniMap,
  SectionHeader,
  ButtonRow,
  LeftButtonRow,
  MapButton,
  BarButton,
  Small,
} from './styles';
import ReservationStatus from './ReservationStatus';


const TEST_DATA = {
  parkingInstructions: 'Pull up to the curb behind the bus stop. Parallel parking.',
  pickupInstructions: 'Pull up to the curb behind the bus stop. Parallel parking. Call or text (123) 456-7890 when you get here',
  start: '05-17-2020 16:00',
  end: '05-17-2020 16:20',
  parkingSpotLat: '36.3094989',
  parkingSpotLong: '-97.3855117',

};

const reservationById = (id) => ({
  parkingInstructions: 'Pull up to the curb behind the bus stop. Parallel parking.',
  contactNumber: '+12345678900',
  business: {
    name: 'DiAnoia\'s Eatery',
    phone: '+1234567890',
    location: {
      lat: '3',
      long: '5',
    },
    pickupInstructions: 'Pull up to the curb behind the bus stop. Parallel parking. Call or text when you get here',
  },
});

// if isCall is false, we'll use a sms: link instead of a tel:
const contactBusiness = (phone, isCall = true) => {
  if (phone) {
    const placeholderText = encodeURIComponent('Hi, I\'m here to pick up my takeout order!');
    const link = `${isCall ? 'tel' : 'sms'}:${phone}${isCall ? '' : `&body=${placeholderText}`}`;
    window.open(link);
  }
};

const openMapLink = (lat, long, desktopUrl) => {
  const link = `comgooglemaps://?saddr=&daddr=${lat},${long}&directionsmode=driving`;
  if (isMobile) {
    window.open(link);
  } else {
    window.open(desktopUrl);
  }
};

const humanReadableTime = (dateStr) => moment(dateStr).format('h:mma');

const humanReadableDate = (dateStr) => moment(dateStr).format('L');

const isReservationToday = (dateStr) => {
  const today = moment();
  return moment(dateStr).isSame(today, 'd');
};

const getDatesFromTime = (timeStr) => {
  const now = moment();
  const start = moment(`${now.format('YYYY-MM-DD')} ${timeStr}`);
  let end = moment(`${now.format('YYYY-MM-DD')} ${timeStr}`).add(20, 'm');
  return { start, end };
};

const Confirmation = () => {
  const { id } = useParams();
  const { destination, time } = useSelector((state) => state.spotSearch);
  destination.international_phone_number = '+14129181875';
  const { start, end } = getDatesFromTime(time);

  const isToday = isReservationToday(start.toString());
  const expired = moment().isAfter(end);

  return (
    <Container>
      <ReservationStatus start={start} end={end} />
      <InfoContainer>
        <Header>
          You
          {' '}
          {expired ? 'had' : 'have'}
          {' '}
          a spot reserved from
          &nbsp;
          {humanReadableTime(start.toString())}
          &nbsp;
          to
          &nbsp;
          {humanReadableTime(end.toString())}
          &nbsp;
          {isToday ? 'today' : `on ${humanReadableDate(start.toString())}` }
        </Header>
        <Description>
          We'll text a confirmation and any updates to (123) 321 4564
        </Description>

        <SectionHeader>
          Parking Instructions:
        </SectionHeader>
        <Description>
          {TEST_DATA.parkingInstructions}
        </Description>
        <SectionHeader>
          Pickup Instructions from
          &nbsp;
          {destination.name}
          :
        </SectionHeader>
        <Description>
          {TEST_DATA.pickupInstructions}
        </Description>
        <Bullets>
          <li>We'll come to your vehicle</li>
          <li>
            <a href={`tel:${destination.international_phone_number}`}>Call/text us</a>
            &nbsp;
            on arrival
          </li>
          <li>Order number required</li>
          <li>ID required</li>
        </Bullets>
        <MiniMap />
        <ButtonRow>
          <LeftButtonRow>
            <MapButton onClick={() => contactBusiness(destination.international_phone_number)}>
              <Icon path={mdiPhone} />
            </MapButton>
            <MapButton onClick={() => contactBusiness(destination.international_phone_number, false)}>
              <Icon path={mdiChat} />
            </MapButton>
          </LeftButtonRow>

          <MapButton onClick={() => openMapLink(TEST_DATA.parkingSpotLat, TEST_DATA.parkingSpotLong, destination.url)}>
            <Icon path={mdiDirections} />
          </MapButton>
        </ButtonRow>
        <Small>
          Get in touch with
          &nbsp;
          {destination.name}
        </Small>
        <BarButton>I'm having trouble finding my spot</BarButton>
        <BarButton>Cancel my reservation</BarButton>
        <BarButton>Modify my reservation</BarButton>
      </InfoContainer>
    </Container>
  );
};

export default Confirmation;
