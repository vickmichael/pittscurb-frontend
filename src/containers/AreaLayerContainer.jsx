import { connect } from 'react-redux';

import AreaLayer from '../manage/AreaLayer';

const mapStateToProps = (state) => ({
  parkingAreas: state.parkingAreas,
});

export default connect(
  mapStateToProps,
  null,
)(AreaLayer);
