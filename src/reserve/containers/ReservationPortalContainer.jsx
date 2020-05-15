import React from 'react';
import { connect } from 'react-redux';

import ReservationPortal from "../components/ReservationPortal/ReservationPortal";

// eslint-disable-next-line react/prefer-stateless-function
class ReservationPortalContainer extends React.Component {

  render() {
    return (
      <ReservationPortal />
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//
//   }
// }

export default connect(
  null,
  null
)(ReservationPortalContainer);