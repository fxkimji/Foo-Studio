import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/mainreducer';
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
