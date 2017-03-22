import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import Root from './components/root';
import Note from './util/note';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('react-root')
  )
  window.store = store;
})
