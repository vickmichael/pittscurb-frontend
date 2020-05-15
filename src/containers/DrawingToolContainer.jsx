import { connect } from 'react-redux';

import DrawingTool from '../manage/DrawingTool';

const mapStateToProps = (state) => ({
  parkingAreas: state.parkingAreas,
});

export default connect(
  mapStateToProps,
  null,
)(DrawingTool);
