import React from 'react';
import Home from "./Components/Home"
import'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact  path="/card/:id" component={Cards} />
          <Route exact path="/">
            <Home  />
          </Route>
          </Switch>
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
