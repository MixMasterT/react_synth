import { combineReducers } from 'redux';

import notesReducer from './notes_reducer';
import isRecordingReducer from './is_recording_reducer';
import tracksReducer from './tracks_reducer';
import isPlayingReducer from './is_playing_reducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  isRecording: isRecordingReducer,
  tracks: tracksReducer,
  isPlaying: isPlayingReducer
})

export default rootReducer;
