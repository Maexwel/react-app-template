// Polyfill and browser support
import 'core-js';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Multilang
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
// Redux store
import { Provider } from 'react-redux';
import { store } from './store';
// Theme 
import { ThemeProvider } from '@material-ui/core';
import { baseTheme } from './theme';
// Routes
import { AppRoutes } from './router';
// Env
require('dotenv').config(); // Env setup

/**
 * Entry point of the app
 */
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={baseTheme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
