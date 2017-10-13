import React, { Component } from 'react';
//import logo from '../logo.svg';
import './Mirador.css';

import defaultSettings from '../config/default-settings';
import MainMenuBar from './MainMenuBar';
import Viewer from './Viewer';

class Mirador extends Component {
  constructor(props) {
    super(props);
    console.log('p', props);
    props.setSettings(defaultSettings);
  }

  render() {
    return (
      <div className="Mirador">
        <MainMenuBar></MainMenuBar>
        <Viewer></Viewer>
      </div>
    );
  }
}

export default Mirador;
