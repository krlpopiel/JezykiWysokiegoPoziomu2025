import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';

function App() {
  return (
    <div className="App">
      <Hello/>
      <hr></hr>
      <ClickCounter/>
      <hr></hr>
      <PrimeCalculator/>
      <hr></hr>
      <FormReducer/>
    </div>
  );
}

export default App;
