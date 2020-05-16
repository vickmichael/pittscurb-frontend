import moment from 'moment';

// converts the times to "HH:MM a" format
export const hourFormat = (raw) => raw.map(
  (rawTime) => moment(rawTime).format('LT')
);

// calculates the start of the next 20 minute window
export const calculateStartTime = (duration) => {
  const now = new Date();
  const addition = duration - (now.getMinutes() % duration);
  return moment(now).add(addition, 'minutes');
};

// returns the next 5 time slots for the user to book
export const getTimeSuggestions = (duration) => {
  const times = new Array(6);
  for (let i = 0; i < 6; i++) {
    if (i === 0) {
      times[0] = calculateStartTime(duration);
    } else {
      times[i] = moment(times[i - 1]).add(duration, 'minutes');
    }
  }
  return hourFormat(times);
};
