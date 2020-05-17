import  React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import clockSvg from '../../../common/svgs/clock.svg';
import { getTimeSuggestions } from '../../utils/timeHelper';

const TimeSelect = () => {
  const dispatch = useDispatch();
  const { time } = useSelector((state) => state.spotSearch);

  const reservationDuration = 20;
  const times = getTimeSuggestions(reservationDuration);

  const handleTimeChange = (e) => {
    dispatch({ type: 'UPDATE_TIME', value: e.target.value });
  };

  useEffect(() => {
    if(time) {
      document.getElementById("selector").value = time;
    }
  }, [])
  

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
