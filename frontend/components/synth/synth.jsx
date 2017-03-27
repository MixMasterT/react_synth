import React from 'react';
import $ from 'jquery';

import { TONES,
         getTone,
         NOTE_NAMES,
         KEYS,
         BASS_KEYS,
         TREBLE_KEYS } from '../../util/tones';

import Note from '../../util/note';

import NoteKey from '../note_key';

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

    console.log(this.notes);

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
    console.log(e.key);
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
    const keys = Object.keys(KEYS).map((keyCode, idx) => (
      <NoteKey
        note={KEYS[keyCode]}
        key={keyCode}
        pitch={'dog'}
        pressed={this.props.notes.includes(KEYS[keyCode])}
      />
    ))
    return (
      <div className='synth'>
        <h3>This is the Synth!</h3>
        <div className='keyboard'>
          {keys}
        </div>
      </div>
    )
  }
}

export default Synth;
