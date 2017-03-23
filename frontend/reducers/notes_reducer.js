import { KEY_PRESSED, KEY_RELEASED } from '../actions/note_actions';
import { merge } from 'lodash'
import { NOTE_NAMES } from '../util/tones';

const _defaultState = {
  notes: []
}

const notesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newNotes = state.notes;

  if (NOTE_NAMES.indexOf(action.key) === -1) {
    return state;
  }

  switch(action.type) {

    case KEY_PRESSED:
      if (newNotes.indexOf(action.key) === -1) {
        newNotes.push(action.key);
      }
      return merge(state, { notes: newNotes });

    case KEY_RELEASED:
      const noteIdx = newNotes.indexOf(action.key);
      if (noteIdx > -1) {
        newNotes.splice(noteIdx, 1);
      }
      return merge(state, { notes: newNotes });

    default:
      return state;
  }
}

export default notesReducer;
