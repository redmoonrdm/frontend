import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-214523295-1');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);