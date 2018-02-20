import React, { Component } from 'react';

export default class JumboTron extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div className = 'row' id='jumboTron'>
        <div className = 'valign wrapper'>
        <img className = "circle responsive-img" src='https://avatars3.githubusercontent.com/u/32209142?s=400&v=4'/>
        </div>
      </div>
    )
  }
}
