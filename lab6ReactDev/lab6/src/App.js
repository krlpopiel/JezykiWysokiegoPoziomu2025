import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';

function App() {
  return (
    <div className="App">
      <Hello/>
      <hr></hr>
      <ClickCounter/>
      <hr></hr>
      <PrimeCalculator/>
      <hr></hr>
    </div>
  );
}

export default App;
