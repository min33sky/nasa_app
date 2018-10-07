import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as apodActions from 'store/modules/apod';

class ViewerContainer extends Component {
  render() {
    return <div />;
  }
}

export default connect(
  state => ({
    date: state.apod.get('date'),
    url: state.apod.get('url'),
    mediaType: state.apod.get('mediaType'),
    loading: state.pender.pending['apod/GET_APOD']
  }),
  dispatch => ({
    ApodActions: bindActionCreators(apodActions, dispatch)
  })
)(ViewerContainer);
