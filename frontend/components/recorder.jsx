import React from 'react';
import { connect } from 'react-redux';

import { startRecording, stopRecording } from '../actions/track_actions';

const Recorder = ({startRecording, stopRecording, isRecording, tracks}) => {
  console.log(isRecording);
  return (
    <div className='recorder'>
      <h3>This is the recorder!</h3>
      <div>
        <button
          onClick={startRecording}
          disabled={isRecording}
        >
          Start
        </button>
        <button
          onClick={stopRecording}
          disabled={!isRecording}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isRecording: state.isRecording,
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
