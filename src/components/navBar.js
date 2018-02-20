import React, { Component } from 'react';

export default class NavBar extends Component{
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  render(){
  <nav>
    <div className="nav-wrapper grey darken-4">
      <a href="#!" className="brand-logo">Brent Schroder</a>
      <a onClick={(e)=>{this.onClick}} className="button-collapse"><i className="material-icons">menu</i></a>
      {this.props.dropdown?
        <ul>
          <li><a>LinkedIn</a></li>
          <li><a>MyStory</a></li>
          <li><a>Resume</a></li>
        </ul>
        :null
      }
    </div>
  </nav>
  }
}
