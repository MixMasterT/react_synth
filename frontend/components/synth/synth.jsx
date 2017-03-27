import React from 'react';
import $ from 'jquery';

import { TONES,
         getTone,
         NOTE_NAMES,
         KEYS,
         BASS_KEYS,
         TREBLE_KEYS } from '../../util/tones';

import Note from '../../util/note';

import NoteKey from './note_key';

import Recorder from '../recorder';

class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      octave: 1
    }

    this.notes = NOTE_NAMES.map((noteName) => {
      const nameArr = noteName.split("");
      const octave = parseInt(nameArr.pop());
      const pitch = nameArr.join("");
      return new Note(getTone(pitch, octave))
    })

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
    // console.log(Object.keys(KEYS));
  }

  onKeyDown(e) {
    const code = e.which;
    const currentOctave = this.state.octave;

    switch (e.key) {
      case 'ArrowDown':
        if (currentOctave > 1) {
          this.setState({ octave: currentOctave - 1 })
        }
        break;
      case 'ArrowUp':
        if (currentOctave < 4) {
          this.setState({ octave: currentOctave + 1 })
        }
        break;
      default:

      if (Object.keys(BASS_KEYS).includes(e.key)) {

        if (Object.keys(BASS_KEYS).indexOf(e.key) === 12) {
          this.props.addNote(BASS_KEYS[e.key] + (this.state.octave + 1));
        } else {
          this.props.addNote(BASS_KEYS[e.key] + this.state.octave);
        }

      } else if (Object.keys(TREBLE_KEYS).includes(e.key)) {

        if (Object.keys(TREBLE_KEYS).indexOf(e.key) === 12) {
          this.props.addNote(TREBLE_KEYS[e.key] + (this.state.octave + 2));
        } else {
          this.props.addNote(TREBLE_KEYS[e.key] + (this.state.octave + 1));
        }
      }
    }
    if (this.props.isRecording) { this.props.addNotes(this.props.notes); }
    console.log(this.props.notes);
  }

  onKeyUp(e) {
    if (Object.keys(BASS_KEYS).includes(e.key)) {

      if (Object.keys(BASS_KEYS).indexOf(e.key) === 12) {
        this.props.removeNote(BASS_KEYS[e.key] + (this.state.octave + 1));
      } else {
        this.props.removeNote(BASS_KEYS[e.key] + this.state.octave);
      }

    } else if (Object.keys(TREBLE_KEYS).includes(e.key)) {

      if (Object.keys(TREBLE_KEYS).indexOf(e.key) === 12) {
        this.props.removeNote(TREBLE_KEYS[e.key] + (this.state.octave + 2));
      } else {
        this.props.removeNote(TREBLE_KEYS[e.key] + (this.state.octave + 1));
      }

    }
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.indexOf(note) !== -1) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  render() {
    this.playNotes();

    const bassKeys = Object.keys(BASS_KEYS).map((key, idx) => (
      <NoteKey
        pitch={BASS_KEYS[key]}
        key={key}
        symbol={key}
        pressed={key === ',' ?
                  (idx === 0 ? this.props.notes.includes('C' + (this.state.octave)) :
                  this.props.notes.includes('C' + (this.state.octave + 1))) :
                  this.props.notes.includes(BASS_KEYS[key] + this.state.octave)}
      />
    ))
    // This is necessary because Object.keys gives wrong order for numerical string values
    const trebbleKeys = [  'q',
      '2',
      'w',
      '3',
      'e',
      'r',
      '5',
      't',
      '6',
      'y',
      '7',
      'u',
      'i'].map((key, idx) => (
      <NoteKey
        pitch={TREBLE_KEYS[key]}
        key={key}
        symbol={key}
        pressed={key === 'i' ?
                  (idx === 0 ? this.props.notes.includes('C' + (this.state.octave + 1)) :
                  this.props.notes.includes('C' + (this.state.octave + 2))) :
                  this.props.notes.includes(TREBLE_KEYS[key] + (this.state.octave + 1))}
      />
    ))

    return (
      <div className='synth'>
        <h3>This is the Synth!</h3>

        <div className='keyboard'>
          {trebbleKeys}
        </div>

        <div className='keyboard'>
          {bassKeys}
        </div>

        <Recorder />
      </div>
    )
  }
}

export default Synth;
