import React from 'react';
import { connect } from 'react-redux';

import AreaLayer from "../manage/AreaLayer";

class AreaLayerContainer extends React.Component {

  render() {
    const { parkingAreas } = this.props;

    return (
      <AreaLayer parkingAreas={parkingAreas} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    parkingAreas: state.parkingAreas
  }
}

export default connect(
  mapStateToProps,
  null
)(AreaLayerContainer);