import './Header.css';
import logo from "./img/Logo 2.png";

const Header = () => {
    return ( 
    <div className='Nav'>
      <div><img src={logo} className="App-logo" alt="logo" /></div>
      <ul>
        <li>Университет</li>
        <li>Поступающим</li>
        <li>Обучающимся</li>
        <li>Научная деятельность</li>
      </ul>
    </div>
    )
}

export default Header;