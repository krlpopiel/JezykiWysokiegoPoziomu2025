import './App.css';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import ToggleDetails from './ToggleDetails';

function App() {
  return (
    <div className="App">
      <ToggleDetails/>
      <ScoreDisplay score={0}/>
      <ScoreDisplay score={50}/>
      <ScoreDisplay score={100}/>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
