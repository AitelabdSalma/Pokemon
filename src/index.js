import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App';
import "antd/dist/antd.css";
import './index.css';

import store from "./stores";

const app =
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider >
  </React.StrictMode>


ReactDOM.render(app, document.getElementById("root"));
