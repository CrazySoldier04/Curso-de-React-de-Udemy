import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './sections/forms'

// Componente como función.
/*function Hello (props) {
return (<h2>{props.title}</h2>)
}
*/

// Componente como arrow function.
/*const Hello = (props) => <h2>{props.title}</h2>
*/

// Componente como una clase.
/*class Hello extends Component
{
  render()
  {
  return <h2>{this.props.title}</h2>
  }
}*
*/

/*class Text extends Component
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
*/

//Componente con estado.
class Contador extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {contador: this.props.contadorInicial}
    setInterval(() => {
    this.setState({contador: this.state.contador + 1})
    }, 1000);
  }

  render()
  {
    return(<ContadorNumero numero={this.state.contador}/>)
  }
}
Contador.defaultProps = {contadorInicial: 0}

class ContadorNumero extends Component
{
  render()
  {
  return(<span>{this.props.numero}</span>)
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
      </header>
    </div>
  );
}

export default App;