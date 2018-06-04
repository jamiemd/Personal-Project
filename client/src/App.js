import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import Navigation from "./Components/Navigation";
// import DeckHome from "./Components/DeckHome";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div className="navContainer">
            <div className="nav">
              <Navigation />
            </div>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/flashcards" />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
