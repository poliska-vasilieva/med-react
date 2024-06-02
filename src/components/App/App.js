import './App.css';
import BlockNews from '../BlockNews/BlockNews';
import Header from '../Header/Header';
import ImgNews from '../ImgNews/ImgNews';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <div>
          <ImgNews />
          <BlockNews />
        </div>

      </div>
    </div>
  );
}

export default App;
