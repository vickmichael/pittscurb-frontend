import  React from 'react';

import clockSvg from '../../../common/svgs/clock.svg';
import { getTimeSuggestions } from '../../utils/timeHelper';

const TimeSelect = () => {
  const reservationDuration = 20;
  const times = getTimeSuggestions(reservationDuration); 

  return (
    <div className="dropdown-wrapper">
      <img src={clockSvg} alt="" />

      <select name="" id="selector">
        <option value="asap">
          As soon as possible
        </option>
        {times.map((time, i) => (
          <option value={time} key={i}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelect;
