export const KEY_PRESSED = 'KEY_PRESSED';
export const KEY_RELEASED = 'KEY_RELEASED';

export const keyPressed = key => ({ type: KEY_PRESSED, key })
export const keyReleased = key => ({ type: KEY_RELEASED, key })
