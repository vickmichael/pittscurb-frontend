import  React from 'react';

import clockSvg from '../../../common/svgs/clock.svg';
import { getTimeSuggestions } from '../../utils/timeHelper';
import { useDispatch } from 'react-redux';

const TimeSelect = () => {
  const dispatch = useDispatch();

  const reservationDuration = 20;
  const times = getTimeSuggestions(reservationDuration); 
  
  const handleTimeChange = (e) => {
    dispatch({type: 'UPDATE_TIME', value: e.target.value});
  }

  return (
    <div className="dropdown-wrapper">
      <img src={clockSvg} alt="" />

      <select name="" id="selector" onChange={handleTimeChange}>
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
