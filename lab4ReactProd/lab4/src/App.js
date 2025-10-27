import Hello from "./Hello";
import HelloWithProps from "./HelloWithProps"
import Counter from "./Counter"
function App() {
  return (
    <div>
      <Hello />
      <HelloWithProps name="Zuzanna" />
      <HelloWithProps name="Szymon" />
      <HelloWithProps name="Sebastian" />
      <Counter/>
    </div>
  );
}
export default App;
