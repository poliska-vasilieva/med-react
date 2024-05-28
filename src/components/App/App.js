import './App.css';
import BlockNews from '../BlockNews/BlockNews';
import Header from '../Header/Header';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header/>
        <BlockNews/>
      </div>
    </div>
  );
}

export default App;
