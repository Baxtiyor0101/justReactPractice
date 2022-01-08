import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class ThemeToggl extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggltheme } = this.context;
    return <button onClick={toggltheme}>Toggle the thame</button>;
  }
}
