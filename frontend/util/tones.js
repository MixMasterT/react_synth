export const TONES = {
  'C': 523.25,
  'Db': 554.37,
  'D': 587.33,
  'Eb': 622.25,
  'E': 659.25,
  'F': 698.46,
  'Gb': 739.99,
  'G': 783.99,
  'Ab': 830.61,
  'A': 880.00,
  'Bb': 932.33,
  'B': 987.77,
}

export const getTone = (pitch, octave) => {
  const modifier = octave - 3;
  return (TONES[pitch] * Math.pow(2, modifier)).toFixed(2);
}

export const NOTE_NAMES = [
  'C0','Db0','D0','Eb0','E0','F0','Gb0','G0','Gb0','A0', 'Ab0', 'B0', 'Bb0',
  'C1','Db1','D1','Eb1','E1','F1','Gb1','G1','Gb1','A1', 'Ab1', 'B1', 'Bb1',
  'C2','Db2','D2','Eb2','E2','F2','Gb2','G2','Gb2','A2', 'Ab2', 'B2', 'Bb2',
  'C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Gb3','A3', 'Ab3', 'B3', 'Bb3',
  'C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Gb4','A4', 'Ab4', 'B4', 'Bb4',
  'C5','Db5','D5','Eb5','E5','F5','Gb5','G5','Gb5','A5', 'Ab5', 'B5', 'Bb5',
  'C6'
];

export const KEYS = [
  'z','s','x','d','c','v','g','b','h','n','j','m',
  'q','2','w','3','e','r','5','t','6','y','7','u','i'
]

export const BASS_KEYS = {
  'z': 'C',
  's': 'Db',
  'x': 'D',
  'd': 'Eb',
  'c': 'E',
  'v': 'F',
  'g': 'Gb',
  'b': 'G',
  'h': 'Ab',
  'n': 'A',
  'j': 'Bb',
  'm': 'B',
  ',': 'C',
}

export const TREBLE_KEYS = {
  'q': 'C',
  '2': 'Db',
  'w': 'D',
  '3': 'Eb',
  'e': 'E',
  'r': 'F',
  '5': 'Gb',
  't': 'G',
  '6': 'Ab',
  'y': 'A',
  '7': 'Bb',
  'u': 'B',
  'i': 'C',
}

export const KEY_MAP = (key_code, octave) => {
  return (key_code === 75 ?
    `${KEYS[key_code]}${octave + 1}` :
    `${KEYS[key_code]}${octave}`)
}
