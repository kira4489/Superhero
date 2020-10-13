import React, { Component } from "react";
import Navbar from "./Navbar";
import "../css/Hero.css";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(fas, faThumbsUp, faThumbsDown);

export default class Hero extends Component {
  state = {
    heroes: [],
  };

  componentDidMount() {
    for (let i = 1; i <= 9; i++) {
      fetch(`https://www.superheroapi.com/api.php/812821986161019/${i}`)
        .then((response) => response.json())
        .then((data) =>
          this.setState({ heroes: [...this.state.heroes, data] })
        );
    }
  }

  render() {
    console.log(this.state.heroes);
    return (
      <>
        <Navbar />
        <div className="container">
          <h1 className="titulo">Superheroes y Villanos</h1>
          <div className="row text-center">
            {this.state.heroes.length > 0 &&
              this.state.heroes.map((hero) => (
                <div className="col-6 col-md-4 mb-4 d-flex">
                  <div className="card">
                    <img class="card-img-top" src={hero.image.url} alt="" />
                    <div className="card-body">
                      <h4 className="card-title"></h4>
                      <p>{hero.name}</p>
                      <p>Publisher: {hero.biography.publisher}</p>
                    </div>
                    <div className="card-footer">
                      <FontAwesomeIcon id="redes" icon={faThumbsUp} />0
                      <FontAwesomeIcon id="redes" icon={faThumbsDown} />0
                    </div>
                    <button id="boton" className="btn btn-success">
                      {" "}
                      Informacion
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}
