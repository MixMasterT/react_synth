export const KEY_PRESSED = 'KEY_PRESSED';
export const KEY_RELEASED = 'KEY_RELEASED';

export const keyPressed = note => ({ type: KEY_PRESSED, note })
export const keyReleased = note => ({ type: KEY_RELEASED, note })
