import React, { Component } from 'react'
// import { Link } from "react-router-dom";

export default class Card extends Component{
    state={
        heroes:[]
    };
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
