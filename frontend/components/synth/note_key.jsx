import React from 'react';

const NoteKey = ({pitch, key, pressed}) => {
  let classes = 'key'
  if (note.indexOf('b') > -1) {
    classes = 'black'
  }
  if (pressed) {
    classes += ' pressed'
  }
  return (
    <div className={classes}>
      <div className='pitch'>
        {pitch}
      </div>
      <div className='key'>
        {key}
      </div>
    </div>
  );
}

export default NoteKey;
