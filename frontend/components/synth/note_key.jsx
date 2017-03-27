import React from 'react';

const NoteKey = ({pitch, symbol, pressed}) => {
  let classes = 'key'
  if (pitch.indexOf('b') > -1) {
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
      <div className='symbol'>
        {symbol}
      </div>
    </div>
  );
}

export default NoteKey;
