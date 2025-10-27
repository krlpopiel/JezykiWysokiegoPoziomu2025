import Hello from "./Hello";
import HelloWithProps from "./HelloWithProps"
function App() {
  return (
    <div>
      <Hello />
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />
    </div>
  );
}
export default App;
