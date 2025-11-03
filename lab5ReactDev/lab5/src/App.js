import './App.css';
import MyszNad from './MyszNad';
import ObsluzKlik from './ObsluzKlik';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import TimerCounter from './TimerCounter';
import ToggleDetails from './ToggleDetails';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <ToggleDetails/>
      <hr></hr>
      <ScoreDisplay score={0}/>
      <ScoreDisplay score={50}/>
      <ScoreDisplay score={100}/>
      <hr></hr>
      <TaskList></TaskList>
      <hr></hr>
      <UserList></UserList>
      <hr></hr>
      <TimerCounter></TimerCounter>
      <hr></hr>
      <ObsluzKlik></ObsluzKlik>
      <hr></hr>
      <MyszNad></MyszNad>
    </div>
  );
}

export default App;
