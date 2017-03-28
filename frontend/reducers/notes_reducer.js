import { NOTE_NAMES } from '../util/tones';
import { KEY_PRESSED,
         KEY_RELEASED,
         GROUP_UPDATE } from '../actions/note_actions';


const notesReducer = (state = [], action) => {
  Object.freeze(state);
  const validNote = NOTE_NAMES.includes(action.note);
  const idx = state.indexOf(action.note);

  switch(action.type) {

    case KEY_PRESSED:
      if (validNote && idx === -1) {
        return [ ...state, action.note];
      }
      return state;

    case KEY_RELEASED:
      if (idx > -1) {
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ];
      }
      return state;

    case GROUP_UPDATE:
      return (action.notes);

    default:
      return state;
  }
}

export default notesReducer;
