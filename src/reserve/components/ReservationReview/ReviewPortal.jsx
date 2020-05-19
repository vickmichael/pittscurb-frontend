import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { baseRequest } from "../../../common/utils/apiRequests";
import {
  useHistory,
  useParams,
} from 'react-router-dom';
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

const reservationById = (id) => ({
  start: '05-16-2020 19:00',
  end: '05-16-2020 19:20',
  parkingInstructions: 'Pull up to the curb behind the bus stop. Parallel parking.',
  business: {
    name: 'APTEKA',
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

const startTime = new Date();
const endTime = new Date();

console.log(startTime.toDateString());
console.log(endTime.toDateString());

startTime.setHours(11);
startTime.setMinutes(30);

endTime.setHours(12);
endTime.setMinutes(0);


export default () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const destinationDetails = useSelector(state => state.spotSearch.destination);
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [vehicle, setVehicle] = useState('');

  const history = useHistory();

  const reservation = reservationById(id);
  const { business } = reservation;

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: grab from Google Maps data once we have a new API key.
    const reservationObject = {
      countryCode: 1,
      phoneNumber: 6144064527,
      businessName: 'APTEKA',
      endTime: '12:00pm',
      startTime: '11:30am',
    };

    if (telephoneNumber && vehicle) {
      baseRequest('http://service.pittscurb.com/reservation', {
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(reservationObject),
        method: 'POST',
      }).then(() => {
        dispatch({
          type: 'UPDATE_PHONE_AND_VEHICLE',
          telephoneNumber,
          vehicle,
        });
        history.push('/confirm/123');
      });
    }
  };

  return (
    <Container>
      <InfoContainer>

        <Header>
          Complete your reservation
        </Header>

        <SummaryContainer>
          <input type="text" placeholder={`${humanReadableTime(startTime)} - ${humanReadableTime(endTime)} today`} />

          <input type="text" placeholder={`300ft walk from ${business.name}`} />
        </SummaryContainer>

        <SectionHeader>
          Pickup Instructions from
          {' '}
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
            {' '}
            on arrival
          </li>
          <li>Order number required</li>
          <li>ID required</li>
        </Bullets>

        <UserInfoContainer>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              id="phoneNumber"
              type="tel"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
              placeholder="Your mobile number"
            />

            <input
              id="carInfo"
              type="text"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              placeholder="Vehicle color, make, and model"
            />

            <SubmitButton>
              Reserve Now
            </SubmitButton>
          </form>
        </UserInfoContainer>
      </InfoContainer>
    </Container>
  );
};
