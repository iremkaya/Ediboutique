import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/root/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/alertify.min.js';
import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.2.0";
import "./assets/demo/demo.css";

import { render } from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import {Provider } from "react-redux"
import configureStore from "./redux/reducers/configureStore";

const store= configureStore();
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
