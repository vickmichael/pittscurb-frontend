import React from 'react';
import { connect } from 'react-redux';

import CreateZone from "../manage/CreateZone";

class CreateZoneContainer extends React.Component {

  render() {
    const { createZone } = this.props;

    return (
      <CreateZone createZone={createZone} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    createZone: state.createZone
  }
}

export default connect(
  mapStateToProps,
  null
)(CreateZoneContainer);