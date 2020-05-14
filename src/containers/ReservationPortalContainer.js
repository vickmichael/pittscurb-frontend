import React from 'react';
import { connect } from 'react-redux';

import ReservationPortal from "../components/ReservationPortal/ReservationPortal";

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