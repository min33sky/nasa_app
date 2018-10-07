import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// Action Type
const PREVIOUS = 'apod/PREVIOUS';

// Action Creaters
export const previous = createAction(PREVIOUS);

// Initial State
const initialState = Map({});

// Reducer
export default handleActions(
  {
    [PREVIOUS]: (state, action) => state
  },
  initialState
);
