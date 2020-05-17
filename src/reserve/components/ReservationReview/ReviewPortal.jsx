import React from 'react';
import {
  Bullets,
  Container,
  Description,
  Header,
  InfoContainer,
  SectionHeader,
  SummaryContainer,
  UserInfoContainer,
  SubmitButton,
} from './ReviewPortalStyles';
import {
  useParams
} from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPhone, mdiChat, mdiDirections } from '@mdi/js';


const reservationById = (id) => {
  return {
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
    }
  }
};

const humanReadableTime = (dateStr) => {
  const date = new Date(dateStr);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export default () => {
  const { id } = useParams();

  const reservation = reservationById(id);
  const { business } = reservation;

  return (
    <Container>
      <InfoContainer>

        <Header>
          Complete your reservation
        </Header>
        
        <SummaryContainer>
          <input type="text" placeholder={humanReadableTime(reservation.start) + " - " + humanReadableTime(reservation.end) + " today"} /><br />
          <input type="text" placeholder={"300ft walk from " + business.name} />
        </SummaryContainer>
       
        <SectionHeader>
          Pickup Instructions from {business.name}:
        </SectionHeader>
        <Description>
          {business.pickupInstructions}
        </Description>
        <Bullets>
          <li>We'll come to your vehicle</li>
          <li><a href={`tel:${business.phone}`}>Call/text us</a> on arrival</li>
          <li>Order number required</li>
          <li>ID required</li>
        </Bullets>

        <UserInfoContainer>
          <form>
            <input type="tel" placeholder="Your mobile number" /><br />
            <input type="text" placeholder="Vehicle color, make, and model" /><br />
            <SubmitButton>Reserve Now</SubmitButton>
          </form>
        </UserInfoContainer>
      </InfoContainer>
    </Container>
  );
};
