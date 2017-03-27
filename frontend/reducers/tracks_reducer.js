import merge from 'lodash/merge';

import { START_RECORDING,
         STOP_RECORDING,
         ADD_NOTES } from '../actions/track_actions';

let currentTrackId = 0;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case START_RECORDING:
      currentTrackId++;
      const newTrack = {
        id: currentTrackId,
        name: `Track ${currentTrackId}`,
        roll: [],
        timeStart: Date.now()
      }
      return merge({[currentTrackId]: newTrack}, state);

    case STOP_RECORDING:
      let currentTrack = state[currentTrackId];
      currentTrack.roll += {
        notes: [],
        timeSlice: action.timeNow - currentTrack.timeStart
      };
      return merge({ [currentTrackId]: currentTrack }, state);

    case ADD_NOTES:
      let currentTrack = state[currentTrackId];
      currentTrack.roll += {
        notes: state.notes + action.notes,
        timeSlice: action.timeNow - currentTrack.timeStart
      };
      return merge({ [currentTrackId]: currentTrack }, state);

    default:
      return state;
  }
}

export default tracksReducer;
