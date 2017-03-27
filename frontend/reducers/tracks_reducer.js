import merge from 'lodash/merge';

import { START_RECORDING,
         STOP_RECORDING,
         ADD_NOTES } from '../actions/track_actions';

let currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case START_RECORDING:
      currTrackId++;
      const newTrack = {
        id: currTrackId,
        name: `Track #{currTrackId}`,
        roll: [],
        timeStart: Date.now()
      }
      return merge(state, {[currTrackId]: newTrack});

    case STOP_RECORDING:
      currentTrack = state[currTrackId];
      currentTrack.roll += {
        notes: [],
        timeSlice: action.timeNow - currentTrack.timeStart
      };
      return merge(state, { [currentTrackId]: currentTrack });

    case ADD_NOTES:
      currentTrack = state[currTrackId];
      currentTrack.roll += {
        notes: state.notes + action.notes,
        timeSlice: action.timeNow - currentTrack.timeStart
      };
      return merge(state, { [currentTrackId]: currentTrack });

    default:
      return state;
  }
}

export default tracksReducer;
