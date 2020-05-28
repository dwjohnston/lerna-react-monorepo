import React from 'react';
import logo from './logo.svg';
import './App.css';
import dep from "dep";
import {MyComponent} from "react-dep";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        plain old dependency is fine: {`${dep()}`}
        <MyComponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
