//import React, {Component} from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Componente como función.
/*function Hello (props) {
return (<h2>{props.title}</h2>)
} */

// Componente como arrow function.
//const Hello = (props) => <h2>{props.title}</h2>

// Componente como una clase.
class Hello extends Component
{
  render()
  {
  return <h2>{this.props.title}</h2>
  }
}

class Text extends Component
{
  render()
  {
    //Estructuración de propiedades.
    const
    {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      text,
      title
    } = this.props
    const mappedNumbers = arrayOfNumbers.map(multiply)
    return(
    <div>
      {title}
      <p>{text}</p>
      <p>{mappedNumbers.join(', ')}</p>
      <p>{objectWithInfo.key}</p>
    </div>)
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Culote con mierda seca" />
        <h3>Vamos a aprender React</h3>
        <Text
            arrayOfNumbers={[2,3,10]}
            multiply={(number) => number * 10}
            objectWithInfo={{key: 'First value', key2: 'Second value'}}
            text="Texto en string"
            title={<h1>Este es el titulo en una propiedad</h1>}
        />
        <h1>Vamonos a Canadá a trabajar en front-end :)</h1>npm
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