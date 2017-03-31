import React from 'react';
import { connect } from 'react-redux';

import { startRecording, stopRecording } from '../../actions/track_actions';

const Recorder = ({startRecording,
                   stopRecording,
                   isRecording,
                   tracks,
                   isPlaying}) => {
  return (
    <div className='recorder'>
      <h3>Press 'start' to record!</h3>
      <div className='recorder-buttons'>
        <button
          onClick={startRecording}
          disabled={isRecording || isPlaying}
        >
          Start
        </button>
        <button
          onClick={stopRecording}
          disabled={!isRecording || isPlaying}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isRecording: state.isRecording,
  isPlaying: state.isPlaying,
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
