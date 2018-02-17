import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import UnAuthHome from "./Components/UnAuthHome";
import AuthHome from "./Components/AuthHome";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
import Flashcards from "./Components/Flashcards";
import DeckHome from "./Components/DeckHome";
import FlashcardContainer from "./Components/FlashcardContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="navContainer">
              <div className="nav">
                <Link className="link" to="/">WikaKita</Link>
                <Link className="link" to="/">Logout</Link>
              </div>
            </div>
            <div>
              <Route exact path="/" component={UnAuthHome} />
              <Route exact path="/home" component={AuthHome} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={Register} />
              <Route exact path="/deckhome" component={DeckHome} />
              <Route exact path="/flashcards" component={FlashcardContainer} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
