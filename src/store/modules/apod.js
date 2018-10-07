import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';
import moment from 'moment';

// Action Type
const PREVIOUS = 'apod/PREVIOUS';
const NEXT = 'apod/NEXT';
const GET_APOD = 'apod/GET_APOD';

// Action Creaters
export const previous = createAction(PREVIOUS);
export const next = createAction(NEXT);
export const getApod = createAction(GET_APOD, api.getAPOD); // date

// Initial State
const initialState = Map({
  maxDate: null,
  date: null,
  url: null,
  mediaType: null
});

// Reducer
export default handleActions(
  {
    // 이전 날짜
    [PREVIOUS]: state =>
      state.update('date', date =>
        moment(date)
          .subtract(1, 'days')
          .format('YYYY-MM-DD')
      ),
    // 다음 날짜
    [NEXT]: state =>
      state.update('date', date =>
        moment(date)
          .add(1, 'days')
          .format('YYYY-MM-DD')
      ),
    // 내용 가져오기
    ...pender({
      type: GET_APOD,
      onSuccess: (state, action) => {
        const { date, url, media_type: mediaType } = action.payload.data;
        // 현재 상태에 maxDate가 설정되어 있지 않다면 설정하기 위해 temnp 상태 생성
        let temp = state;
        if (!temp.get('date')) {
          temp = temp.set('date', date).set('maxDate', date);
        }
        return temp.set('mediaType', mediaType).set('url', url);
      }
    })
  },
  initialState
);
