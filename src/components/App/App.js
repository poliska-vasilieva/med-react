import './App.css';
import Header from '../Header/Header';
import SmallNews from '../Event/News/SmallNews/SmallNews';
import MainNews from '../Event/News/MainNews/MainNews'
import Divisions from '../Event/News/Divisions/Divisions'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <div className='EventBlock'>
          <MainNews />
          <SmallNews />
          <Divisions />
        </div>
      </div>
    </div>
  );
}

export default App;
