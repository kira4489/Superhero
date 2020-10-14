import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/Cards.css";

class Cards extends Component {
  state = {
    heroe: {},
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://www.superheroapi.com/api.php/812821986161019/${id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ heroe: data }));
  }
  render() {
    console.log(this.state.heroe);
    return (
      <div className="container">
        {Object.entries(this.state.heroe).length > 0 && (
          <div>
            <div className="col-8 col-xl-8 mb-4 d-flex">
              <div className="d-flex">
                <img id="cards" src={this.state.heroe.image.url} />
                <ul>
                  <h4 className="cards">
                    <strong>Biography</strong>
                  </h4>
                  <li>
                    <strong>Full Name: </strong>
                    {this.state.heroe.biography["full-name"]}
                  </li>
                  <li>
                    <strong>Aliases: </strong>
                    {this.state.heroe.biography.aliases}
                  </li>
                  <li>
                    <strong>Alter Egos: </strong>
                    {this.state.heroe.biography["alter-egos"]}
                  </li>
                  <li>
                    <strong>Place of Birth: </strong>
                    {this.state.heroe.biography["place-of-birth"]}
                  </li>
                  <li>
                    <strong>Race: </strong>
                    {this.state.heroe.appearance.race}
                  </li>
                  <li>
                    <strong>Alignment: </strong>
                    {this.state.heroe.biography.alignment}
                  </li>
                  <li>
                    <strong>Gender: </strong>
                    {this.state.heroe.appearance.gender}
                  </li>
                  <li>
                    <strong>Occupation: </strong>
                    {this.state.heroe.work.occupation}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Cards);
