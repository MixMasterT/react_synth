import React from 'react';
import { connect } from 'react-redux';

import { startPlaying, stopPlaying } from '../../actions/play_actions';
import { groupUpdate } from '../../actions/note_actions';
import { deleteTrack } from '../../actions/track_actions';

import Track from './track';

const Jukebox = ({ tracks,
                   isPlaying,
                   isRecording,
                   onPlay,
                   deleteTrack }) => {
  const trackIds = Object.keys(tracks);

  const tracksList = trackIds.map((id) => (
    <Track
      track={tracks[id]}
      disabled={isPlaying || isRecording}
      onPlay={onPlay(tracks[id])}
      key={id}
      onDelete={() => deleteTrack(id)}
    />
  ))

  const heading = <h3>Click 'play' to hear your recorded tracks!</h3>
  
  return (
    <div className='jukebox'>
      {trackIds.length > 0 ? heading : "" }
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
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
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
