import React from "react";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import "./index.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggl from "./components/ThemeToggl";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggl />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
