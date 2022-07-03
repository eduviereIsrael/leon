import './App.css';

import { StateContext } from './context/StateContext';
import MainApp from './MainApp';
import { Navbar, Footer } from './Componenets';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';

function App() {
  return (
    <StateContext>

      <div className="App">
        <Navbar />
        <div className='main-container'>
          <Routes>
            <Route path='/' element = { <MainApp />}/>
            <Route path='/product/:name' element = { <ProductPage />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </StateContext>
    
  );
}

export default App;
