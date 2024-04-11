import "./App.css";
import NavBar from "./components/NavBar";
import NewsItem from "./components/NewsItem";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="mainApp">
        <NavBar />
        <NewsItem />
      </div>
    );
  }
}
