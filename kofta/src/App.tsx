import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useHelloQuery } from "./generated/graphql";

function App() {
  const data = useHelloQuery();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.client}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
