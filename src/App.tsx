import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Outlet />
      </body>
    </div>
  );
}

export default App;
