import React from 'react';
import styled from 'styled-components';

const HeroImage = styled.img`
  width: 100%;
`;

const ReservationPortal = () => (
  <div>
    <HeroImage
      src="Reservation-Portal_Hero-Image.png"
      alt="Map with highlighted parking area"
    />
    <div>
      Here is the Reservation Portal! Kneel before Zod!!!
    </div>
  </div>
);

export default ReservationPortal;
