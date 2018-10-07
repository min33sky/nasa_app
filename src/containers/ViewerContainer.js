import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as apodActions from 'store/modules/apod';
import Viewer from 'components/Viewer';

class ViewerContainer extends Component {
  req = null;

  getApod = async () => {
    const { ApodActions, loading, date } = this.props;
    loading && this.req.cancel(); // 로딩중이라면 기존의 요청 취소

    try {
      // this.req에 Promise 담기
      this.req = ApodActions.getApod(date || '');
      await this.req;
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getApod();
  }

  componentDidUpdate(prevProps, prevState) {
    // date가 변경되면 요청
    if (this.props.date !== prevProps.date) {
      this.getApod();
    }
  }

  render() {
    const { date, url, mediaType, loading } = this.props;

    return (
      <Viewer date={date} url={url} mediaType={mediaType} loading={loading} />
    );
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
