import React from 'react';
import {
  BigNumber,
  Text,
  Uppercase,
  Expired,
} from './styles';
import colors from '../../../common/constants/colors';
import styled from 'styled-components';

// determines at what point the status box changes to a warning before the reservation expires
const WARNING_THRESHOLD = 5;

const colorFromDiff = (start, end, now) => {
  if ((now - start) < 0) { // if reservation hasn't started
    return colors.grayDark;
  } else if ((now - end) > 0) { // if reservation is expired
    return colors.failure;
  } else { // if reservation is in progress
    const minRemaining = Math.ceil((end - now) / (1000 * 60));
    return minRemaining > WARNING_THRESHOLD ? colors.success : colors.warning;
  }
};

const BaseStatus = styled.div`
  ${ ({startDate, endDate, now}) =>`
    color: ${colors.white};
    background-color: ${colorFromDiff(startDate, endDate, now)};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 3.25rem 4.5rem 1.75rem 4.5rem;
    font-family: Muli;
    font-style: normal;
    box-shadow: inset 0 -7px 9px -7px rgba(0,0,0,0.4);
  `}
`;

const ReservationStatus = (props) => {
  const now = new Date();
  const startDate = new Date(props.start);
  const endDate = new Date(props.end);
  const inProgress = (now - startDate) >= 0;
  const expired = (now - endDate) >= 0;
  const minRemaining = Math.ceil( (inProgress ? (endDate - now) : (startDate - now)) / (1000 * 60));
  const Status = expired ?  Expired : BigNumber;

  return (
    <BaseStatus startDate={startDate} endDate={endDate} now={now}>
      <Text>Reservation {expired ? '' : (inProgress ? 'ends in' : 'starts in')}</Text>
      <Status>{expired ? 'EXPIRED' : minRemaining}</Status>
      <Uppercase>{expired ? -minRemaining : ''} minutes {expired ? 'ago' : ''}</Uppercase>
    </BaseStatus>
  );
};

export default ReservationStatus;
