import React from 'react';
import ReactDOM from 'react-dom';
import 'swiper/swiper-bundle.min.css';
import './global-styles/reset.scss';
import 'react-circular-progressbar/dist/styles.css';
import './global-styles/global.scss';
import {App} from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
