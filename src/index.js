import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CylForce from './cylForce';
import Cord from './cord';
import LeakRate from './leakRate';

ReactDOM.render(
  <div>
    <CylForce />
    <hr/>
    <Cord />
    <hr/>
    <LeakRate />
  </div>,
  document.getElementById('root')
);