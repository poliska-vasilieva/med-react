import './App.css';
import logo from "./img/Logo 2.png";
import mainNewPicture from "./img/pic2 1.png";
import oneSmallPict from "./img/pic2 1 (1).png";
import twoSmallPict from "./img/pic2 2.png";
import threeSmallPict from "./img/pic2 3.png";
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const nameFirst = 'Университет';
    const nameSecond = 'Поступающим';
    const nameThird = 'Обучающимся';
    const nameFofth = 'Научная деятельность';

    return <div className='Nav'>
      <div><img src={logo} className="App-logo" alt="logo" /></div>
      <ul>
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
        <div><img src={mainNewPicture} className="mainNewPicture" alt="mainNewPicture" /></div>
        <p>3 октября 2023</p>
        <p>Второй этап конкурса на звание «Лучший врач педиатр участковый»</p>
        <p>3 октября 2023 года прошло тестирование практических навыков врачей педиатров участковых в обучающем...</p>
        <p>{link}</p>
      </div>

      <div className='secondBlock'>
        <div className='threeNews'>
          <div className='oneNew'>
            <div><img src={oneSmallPict} className="oneSmallPict" alt="oneSmallPict" /></div>
            <p>26 сентября 2023</p>
            <p>Международные студенческие обмены. Опыт и перспективы</p>
          </div>
        </div>

        <div className='threeNews'>
          <div className='twoNew'>
            <div><img src={twoSmallPict} className="twoSmallPict" alt="twoSmallPict" /></div>
            <p>16 сентября 2023</p>
            <p>Встреча выпускников 1983 года</p>
          </div>
        </div>

        <div className='threeNews'>
          <div className='threeNew'>
            <div><img src={threeSmallPict} className="threeSmallPict" alt="threeSmallPict" /></div>
            <p>14 сентября 2023</p>
            <p>Противодействие идеологии терроризма и профилактики экстремизма в социальных сетях</p>
          </div>
        </div>
      </div>

      <div className='thirdBlock'>
        <p>здесь будет меню с подразделениями Университета</p>
      </div>

    </div>
  }
}

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <BlockNews />
      </div>
    </div>
  );
}

export default App;
