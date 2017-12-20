import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Tagalog! </h1>
      <Link to="/"> Home</Link>
      <Link to="/flashcards">Flashcards</Link>
    </div>
  );
}
export default Home;
