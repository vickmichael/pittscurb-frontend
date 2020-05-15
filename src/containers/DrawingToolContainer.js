import React from 'react';
import { connect } from 'react-redux';

import DrawingTool from "../manage/DrawingTool";

class DrawingToolContainer extends React.Component {

  render() {
    const { parkingAreas } = this.props;

    return (
      <DrawingTool parkingAreas={parkingAreas} />
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
)(DrawingToolContainer);