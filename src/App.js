import React, { Component } from "react";
import "./App.css";
//import Signup from "./Components/Logins/Signup";
//import Login from "./Components/Logins/Login";
import Flashcards from "./Components/Flashcards";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: "no"
    };
  }

  handleLogIn = () => {
    this.setState({ loggedIn: "yes" });
    console.log("successfully logged in");
  };

  handleFlashCard = () => {
    this.setState({});
  };

  render() {
    return (
      <div className="App">
        <h1> Tagalog! </h1>
        {/*<div className="status">Logged in status is: {this.state.loggedIn}</div>*/}
        {/*<Login onLogin={this.handleLogIn} />*/}
        <Flashcards />
      </div>
    );
  }
}
//<Signup onLogin={this.handleLogIn}/>
export default App;
