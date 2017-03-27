import { connect } from 'react-redux';

import { keyPressed, keyReleased } from '../../actions/note_actions';
import { addNotes } from '../../actions/track_actions';
import Synth from './synth';

const mapStateToProps = state => ({
   notes: state.notes,
   isRecording: state.isRecording
 });

const mapDispatchToProps = dispatch => ({
  addNote: key => dispatch(keyPressed(key)),
  removeNote: key => dispatch(keyReleased(key)),
  addNotes: (notes) => dispatch(addNotes(notes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);
