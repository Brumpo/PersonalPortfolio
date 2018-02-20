import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar.js'
import BodyContainer from './components/bodycontainer.js'
import JumboTron from './components/jumboTron.js'

class App extends Component {
  constructor(props){
    this.state = {
      projects : []
      dropdown : false
      expanded : -1
    }
    this.toggleDropdown = this.toggleDropdown
  }
  toggleDropdown(){
    this.dropdown
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
