import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = { notes: [] }) => (
  createStore(
    rootReducer,
    preloadedState
  )
);

export default configureStore;
