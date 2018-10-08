import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SpaceNavigator from 'components/SpaceNavigator';
import * as apodActions from 'store/modules/apod';

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
    const { date, maxDate } = this.props;
    return (
      <SpaceNavigator
        onPrev={handlePrev}
        onNext={handleNext}
        endDate={date === maxDate}
      />
    );
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
