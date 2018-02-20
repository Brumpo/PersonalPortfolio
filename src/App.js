import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar.js'
import BodyContainer from './components/bodycontainer.js'
import JumboTron from './components/jumboTron.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects : [4,12,2,15],
      dropdown : false,
      expanded : -1
    }
    this.toggleDropdown = this.toggleDropdown
  }
  toggleDropdown(){
    var newDropdown = this.dropdown ? false : true
    this.setState({dropdown: newDropdown})
  }
  render() {
    return (
      <div className="App">
        <NavBar dropdown = {this.state.dropdown} toggleDropdown = {this.toggleDropdown}/>
        <JumboTron/>
        <BodyContainer projects = {this.state.projects} expanded = {this.state.expanded}/>

      </div>
    );
  }
}

export default App;
