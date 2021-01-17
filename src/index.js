import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App';
import './global-styles/reset.scss';
import './global-styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
