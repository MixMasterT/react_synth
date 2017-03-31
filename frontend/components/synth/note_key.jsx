import React from 'react';

const NoteKey = ({pitch,
                  symbol,
                  pressed,
                  handleMouseDown,
                  handleMouseUp}) => {
  let classes = 'key'
  if (pitch.indexOf('b') > -1) {
    classes = `black ${pitch}`;
  }
  if (pressed) {
    classes += ' pressed'
  }
  return (
    <div
      className={classes}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
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
