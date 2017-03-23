import React from 'react';
import $ from 'jquery';

import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';

class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.notes = NOTE_NAMES.map((nN) => new Note(TONES[nN]));
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    console.log(e.which);
    this.props.keyPressed(e.which);
  }

  onKeyUp(e) {
    console.log(e.which);
    const key = e.target.value
    this.props.keyReleased(e.which);
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
