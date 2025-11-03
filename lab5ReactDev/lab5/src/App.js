import './App.css';
import MyszNad from './MyszNad';
import ObsluzKlik from './ObsluzKlik';
import PokazObraz from './PokazObraz';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import TimerCounter from './TimerCounter';
import ToggleDetails from './ToggleDetails';
import UserList from './UserList';
import WyludzPlik from './WyludzPlik';
import ZaladujJsona from './ZaladujJsona';
import ZmienStyl from './ZmienStyl';

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
      <hr></hr>
      <PokazObraz></PokazObraz>
      <hr></hr>
      <ZaladujJsona></ZaladujJsona>
      <hr></hr>
      <WyludzPlik></WyludzPlik>
      <hr></hr>
      <ZmienStyl></ZmienStyl>
    </div>
  );
}

export default App;
