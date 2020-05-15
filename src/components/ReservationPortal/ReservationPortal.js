import React from 'react';
import * as styles from './styles';

import heroImage from './Reservation-Portal_Hero-Image.png'

const ReservationPortal = () => {
  return (
    <div>
      <styles.HeroImage
        src={heroImage}
        alt="Map with highlighted parking area"
      />

      <div>
        Here is the Reservation Portal! Kneel before Zod!!!
      </div>
    </div>
  );
}

export default ReservationPortal;