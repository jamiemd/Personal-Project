import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import UnAuthHome from "./Components/UnAuthHome";
import AuthHome from "./Components/AuthHome";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Flashcards from "./Components/Flashcards";
import DeckHome from "./Components/DeckHome";
import FlashcardContainer from "./Components/FlashcardContainer";
import RequireAuthentication from './Components/HOC/RequiredAuth';
import HeaderLogo from "./Components/HeaderLogo"
import SignOut from "./Components/SignOut"


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="navContainer">
              <div className="nav">
                <HeaderLogo />
                <SignOut />
              </div>
            </div>
            <div>
              <Route exact path="/" component={SignOut} />
              <Route exact path="/" component={UnAuthHome} />
              <Route exact path="/home" component={RequireAuthentication(AuthHome)} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/deckhome" component={RequireAuthentication(DeckHome)} />
              <Route exact path="/flashcards" component={RequireAuthentication(FlashcardContainer)} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

