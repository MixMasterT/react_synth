import React from 'react';
import { connect } from 'react-redux';

import { startPlaying, stopPlaying } from '../../actions/play_actions';
import { groupUpdate } from '../../actions/note_actions';

import Track from './track';

const Jukebox = ({ tracks, isPlaying, isRecording, onPlay }) => {
  const tracksList = Object.keys(tracks).map((id) => (
    <Track
      track={tracks[id]}
      disabled={isPlaying || isRecording}
      onPlay={onPlay(tracks[id])}
      key={id}
    />
  ))
  return (
    <div className='jukebox'>
      This is the Jukebox
      <div className='track-list'>
        {tracksList}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
})

const mapDispatchToProps = dispatch => ({
  onPlay: track => e => {
    dispatch(startPlaying());
    const roll = track.roll;
    const playbackStartTime = Date.now();

    let currentNote = 0;
    let elapsedTime;

    let interval = setInterval(() => {
      if (currentNote < roll.length) {
        elapsedTime = Date.now() - playbackStartTime;

        if (elapsedTime >= roll[currentNote].timeSlice) {
          dispatch(groupUpdate(roll[currentNote].notes));
          currentNote++;
        }

      } else {
        clearInterval(interval);
        dispatch(stopPlaying());
      }
    }, 1)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
