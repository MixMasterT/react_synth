import React from 'react';

const NoteKey = ({note, pressed}) => {
  let classes = 'key'
  if (note.indexOf('b') > -1) {
    classes += ' black'
  }
  if (pressed) {
    classes += ' pressed'
  }
  return (
    <div className={classes}>
      {note}
    </div>
  );
}

export default NoteKey;
