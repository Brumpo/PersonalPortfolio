import React, { Component } from 'react';
import Card from './card.js'


export default class BodyContainer extends Component{
  render(){
    return(
      <div className='row'>
        {this.props.projects.map(project=>{
          return (<Card project={project}/>)
        })}
      </div>
    )
  }
}
