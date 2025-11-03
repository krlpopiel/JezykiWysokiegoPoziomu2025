import './App.css';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import TimerCounter from './TimerCounter';
import ToggleDetails from './ToggleDetails';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <ToggleDetails/>
      <ScoreDisplay score={0}/>
      <ScoreDisplay score={50}/>
      <ScoreDisplay score={100}/>
      <TaskList></TaskList>
      <UserList></UserList>
      <TimerCounter></TimerCounter>
    </div>
  );
}

export default App;
