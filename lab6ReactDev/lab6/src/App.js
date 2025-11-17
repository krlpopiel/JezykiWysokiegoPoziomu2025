import './App.css';
import Hello from './Hello';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';
import { useTheme, ThemeProvider } from "./ThemeContext"
import LayoutEffectExample from './LayoutEffectExample';


function ThemeSwitcher() {
 const { dark, toggleTheme } = useTheme()
 return (
 <div style={{ background: dark ? "#333" : "#fff", color:
dark ? "#fff" : "#000" }}>
 <button onClick={toggleTheme}>Przełącz motyw</button>
 </div>
 )
}

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
      <hr></hr>
      <ThemeProvider>
      <ThemeSwitcher/>
      </ThemeProvider>
      <hr></hr>
      <LayoutEffectExample/>
    </div>
  );
}

export default App;
