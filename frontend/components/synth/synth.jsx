import React from 'react';
import $ from 'jquery';

import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';

class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      octave: 1
    }

    this.notes = NOTE_NAMES.map((noteName) => new Note(TONES[noteName]));
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    // this.props.keyPressed(e.which);
    const code = e.which;
    const currentOctave = this.state.octave;
    console.log("current octave is ", currentOctave);
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
    }
  }

  onKeyUp(e) {
    console.log(e.which);
    console.log(this.state.octave);
    // this.props.keyReleased(e.which);
  }

  playNotes() {
    this.props.notes.forEach((note) => {
      note.start();
    })
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
