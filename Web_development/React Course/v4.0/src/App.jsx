import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="mainApp">
        <NavBar />
        <News />
        <Footer />
      </div>
    );
  }
}
