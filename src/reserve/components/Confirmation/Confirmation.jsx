import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPhone, mdiChat, mdiDirections } from '@mdi/js';
import ReservationStatus from './ReservationStatus';
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


const reservationById = () => ({
  start: '05-16-2020 19:00',
  end: '05-16-2020 19:20',
  parkingInstructions: 'Pull up to the curb behind the bus stop. Parallel parking.',
  business: {
    name: 'DiAnoia\'s Eatery',
    phone: '+1234567890',
    location: {
      lat: '3',
      long: '5',
    },
    pickupInstructions: 'Pull up to the curb behind the bus stop. Parallel parking. Call or text (123) 456-7890 when you get here',
  },
});

const humanReadableTime = (dateStr) => {
  const date = new Date(dateStr);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const Confirmation = () => {
  const { id } = useParams();

  const reservation = reservationById(id);
  const { business } = reservation;

  return (
    <Container>
      <ReservationStatus start={reservation.start} end={reservation.end} />
      <InfoContainer>
        <Header>
          You have a spot reserved from
          &nbsp;
          {humanReadableTime(reservation.start)}
          &nbsp;
          to
          &nbsp;
          {humanReadableTime(reservation.end)}
          &nbsp;
          today
        </Header>
        <Description>
          We'll text a confirmation and any updates to (123) 321 4564
        </Description>

        <SectionHeader>
          Parking Instructions:
        </SectionHeader>
        <Description>
          {reservation.parkingInstructions}
        </Description>
        <SectionHeader>
          Pickup Instructions from
          &nbsp;
          {business.name}
          :
        </SectionHeader>
        <Description>
          {business.pickupInstructions}
        </Description>
        <Bullets>
          <li>We'll come to your vehicle</li>
          <li>
            <a href={`tel:${business.phone}`}>Call/text us</a>
            &nbsp;
            on arrival
          </li>
          <li>Order number required</li>
          <li>ID required</li>
        </Bullets>
        <MiniMap />
        <ButtonRow>
          <LeftButtonRow>
            <MapButton>
              <Icon path={mdiPhone} />
            </MapButton>
            <MapButton>
              <Icon path={mdiChat} />
            </MapButton>
          </LeftButtonRow>

          <MapButton>
            <Icon path={mdiDirections} />
          </MapButton>
        </ButtonRow>
        <Small>
          Get in touch with
          {business.name}
        </Small>
        <BarButton>I'm having trouble finding my spot</BarButton>
        <BarButton>Cancel my reservation</BarButton>
        <BarButton>Modify my reservation</BarButton>
      </InfoContainer>
    </Container>
  );
};

export default Confirmation;
