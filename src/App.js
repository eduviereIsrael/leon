import './App.css';
import { StateContext } from './context/StateContext';
import MainApp from './MainApp';

function App() {
  return (
    <StateContext>
      <div className="App">
        <MainApp />
      </div>
    </StateContext>
    
  );
}

export default App;
