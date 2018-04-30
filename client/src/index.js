import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import {Provider} from from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}><Router /></Provider>, document.getElementById('root'));
registerServiceWorker();
