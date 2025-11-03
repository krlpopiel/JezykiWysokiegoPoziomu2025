import './App.css';
import ScoreDisplay from './ScoreDisplay';
import ToggleDetails from './ToggleDetails';

function App() {
  return (
    <div className="App">
      <ToggleDetails/>
      <ScoreDisplay score={0}/>
      <ScoreDisplay score={50}/>
      <ScoreDisplay score={100}/>
    </div>
  );
}

export default App;
