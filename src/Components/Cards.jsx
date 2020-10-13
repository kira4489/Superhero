import React, { Component } from 'react'

export default class Cards extends Component {
  state = {
    heroes:[],
  }
  componentDidMount(){
    fetch(`https://www.superheroapi.com/api.php/812821986161019/`)
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
