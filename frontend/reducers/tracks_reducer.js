import merge from 'lodash/merge';

import { START_RECORDING,
         STOP_RECORDING,
         ADD_NOTES,
         DELETE_TRACK } from '../actions/track_actions';

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
      let endingTrack = state[currentTrackId];
      endingTrack.roll.push({
        notes: [],
        timeSlice: action.timeNow - endingTrack.timeStart
      });
      return merge({ [currentTrackId]: endingTrack }, state);

    case ADD_NOTES:
      let currentTrack = state[currentTrackId];
      currentTrack.roll.push({
        notes: action.notes,
        timeSlice: action.timeNow - currentTrack.timeStart
      });
      return merge({ [currentTrackId]: currentTrack }, state);

    case DELETE_TRACK:
      let newState = merge({}, state);
      delete newState[action.trackId];
      return newState;

    default:
      return state;
  }
}

export default tracksReducer;
