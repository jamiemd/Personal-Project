import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Flashcards from "./Components/Flashcards";
import DeckHome from "./Components/DeckHome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="navBar">
              <div className="nav">
                <Link to="/">WikaKita</Link>
              </div>
            </div>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/deckhome" component={DeckHome} />
              <Route exact path="/flashcards" component={Flashcards} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
