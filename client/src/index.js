import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Router from './Router';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}><Router /></Provider>, document.getElementById('root'));
registerServiceWorker();
