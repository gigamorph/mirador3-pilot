import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import mirador from './reducers';
import registerServiceWorker from './registerServiceWorker';
import MiradorContainer from './containers/MiradorContainer';

const store = createStore(mirador);

ReactDOM.render(
  <Provider store={store}>
    <MiradorContainer />
  </Provider>,
  document.getElementById('mirador')
);

setTimeout(() => {
  console.log('state:', store.getState());
}, 1000);

registerServiceWorker();
