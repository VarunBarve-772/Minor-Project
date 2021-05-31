import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";

import {BrowserRouter} from 'react-router-dom';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>,
  document.getElementById('root')
);