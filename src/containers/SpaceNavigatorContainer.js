import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as apodActions from 'store/modules/apod';
import { SpaceNavigator } from 'components/SpaceNavigator';

class SpaceNavigatorContainer extends Component {
  handlePrev = () => {
    const { ApodActions } = this.props;
    ApodActions.previous();
  };

  handleNext = () => {
    const { ApodActions, date, maxDate } = this.props;
    if (date === maxDate) return; // 오늘이면 작동 중지
    ApodActions.next();
  };

  render() {
    const { handlePrev, handleNext } = this;
    return <SpaceNavigator onPrev={handlePrev} onNext={handleNext} />;
  }
}

export default connect(
  state => ({
    date: state.apod.get('date'),
    maxDate: state.apod.get('maxDate')
  }),
  dispatch => ({
    ApodActions: bindActionCreators(apodActions, dispatch)
  })
)(SpaceNavigatorContainer);
