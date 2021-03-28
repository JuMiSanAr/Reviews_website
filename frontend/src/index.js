import React from 'react';
import ReactDOM from 'react-dom';

import { store } from "./store";
import { Provider } from 'react-redux';

import Routes from './routes';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
