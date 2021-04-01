import React from 'react';
import ReactDOM from 'react-dom';

import { store } from "./store";
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IconContext } from "react-icons";
import Routes from './routes';
import { GlobalStyle, theme } from './styles';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <IconContext.Provider
          value={{ color:'#e6e6e6', size: '50px' }} >
      <Routes />
      </IconContext.Provider>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
