import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class Cards extends Component {
  state = {
    heroe: {},
  }
  componentDidMount(){
    const id = this.props.match.params.id
    fetch(`https://www.superheroapi.com/api.php/812821986161019/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ heroe: data }))
  }
  render() {
    console.log(this.state.heroe)
    return (
      <div>
        {Object.entries(this.state.heroe).length > 0 && <div>
          <img src={this.state.heroe.image.url}/>
        <p>{this.state.heroe.biography.publisher}</p>
        </div> }
        
      </div>
    )
  }
}

export default withRouter(Cards)