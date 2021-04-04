import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Headernew from './components/Headernew.js';
import Cardsnew from './components/Cardsnew.js';
import Issuenew from './components/Issuesnew.js';
import Specialitynew from "./components/Specialitiesnew.js";
import Footernew from "./components/Footernew.js";
ReactDOM.render(
  <React.StrictMode>
    <Headernew />
    <Cardsnew />
    <Issuenew />
    <Specialitynew />
    <Footernew />
  </React.StrictMode>,
  document.getElementById('root')
);
