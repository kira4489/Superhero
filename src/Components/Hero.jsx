import React, { Component } from "react";
import Navbar from "./Navbar";
import "../css/Hero.css";

export default class Hero extends Component {
  state = {
    heroes: [],
  };

  componentDidMount() {
    for (let i = 1; i <= 9; i++) {
      fetch(`https://www.superheroapi.com/api.php/812821986161019/${i}`)
        .then((response) => response.json())
        .then((data) => this.setState({ heroes: [...this.state.heroes, data] }));
    }
  }

  render() {
    console.log(this.state.heroes)
    return (
      <>
      <Navbar/>
      <div className="container">
        <h1 className="titulo">Superheroes</h1>
      <div className="row text-center">
        {this.state.heroes.length > 0 && this.state.heroes.map(hero => (
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
            <img
                class="card-img-top"
                src={hero.image.url}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title"></h4>
              <p>{hero.name}</p>
        <p>Publisher:{hero.biography.publisher}</p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                 Me gusta
                </a>
                <a href="#" className="btn btn-primary">
                 No me gusta
                </a>
              </div>
              <button id="boton" className="btn btn-success">Mas informacion</button>
            </div>
          </div>
            ))}
      </div>
      </div>
      </>
    );
  }
}
