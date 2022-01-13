import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggl = () => {
  const { toggltheme } = useContext(ThemeContext);

  return <button onClick={toggltheme}>Toggle the thame</button>;
};
export default ThemeToggl;
