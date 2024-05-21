import './App.css';
import logo from "./logo.svg";
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const nameFirst = 'Университет';
    const nameSecond = 'Поступающим';
    const nameThird = 'Обучающимся';
    const nameFofth = 'Научная деятельность';

    return <div className='Nav'>
      <ul>
        <li><img src={logo} className="App-logo" alt="logo" /></li>
        <li>{nameFirst}</li>
        <li>{nameSecond}</li>
        <li>{nameThird}</li>
        <li>{nameFofth}</li>
      </ul>
    </div>
  }
}

class BlockNews extends Component {
  render() {
    const link = 'Все новости >'

    return <div className='mainBlock'>
      <div className='firstBlock'>
        <div className='imgfirstBlock'></div>

      </div>
      <div className='secondBlock'>
        <h1>{link}</h1>
      </div>
    </div>
  }
}

function App() {
  return (
    <div className='App'>
      <Navbar />,
      <BlockNews />
    </div>
  );
}

export default App;
