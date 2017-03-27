export const KEY_PRESSED = 'KEY_PRESSED';
export const KEY_RELEASED = 'KEY_RELEASED';
export const GROUP_UPDATE = 'GROUP_UPDATE';

export const keyPressed = note => ({ type: KEY_PRESSED, note })
export const keyReleased = note => ({ type: KEY_RELEASED, note })
export const groupUpdate = notes => ({
  type: GROUP_UPDATE,
  notes
})
