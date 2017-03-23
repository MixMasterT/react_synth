import React from 'react';
import $ from 'jquery';

import { NOTE_NAMES, TONES, KEY_MAP, KEYS } from '../../util/tones';
import Note from '../../util/note';

class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      octave: 1
    }

    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
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

    switch (code) {
      case 90:
        if (currentOctave > 1) {
          this.setState({ octave: currentOctave - 1 })
        }
        break;
      case 88:
        if (currentOctave < 4) {
          this.setState({ octave: currentOctave + 1 })
        }
        break;
      default:
        if (Object.keys(KEYS).indexOf(code.toString()) > -1) {
          this.props.addNote(KEY_MAP(code, this.state.octave));
        }
    }

    console.log(this.props.notes);
  }

  onKeyUp(e) {
    console.log(this.props.notes);
    this.props.removeNote(KEY_MAP(e.which, this.state.octave));
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
    return (
      <div className='synth'>
        <h3>This is the Synth!</h3>
      </div>
    )
  }
}

export default Synth;
