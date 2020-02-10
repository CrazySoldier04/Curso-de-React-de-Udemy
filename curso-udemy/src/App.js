import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Eliott Ivan Salazar Quijada</h2>
        <h3>Vamos a aprender React</h3>
        <p>
          Hola Mundo, estoy aprendiendo a utilizar React
        </p>
        <h1>Vamonos a Canadá a trabajar en front-end :)</h1>
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
