import Hello from "./Hello";
import HelloWithProps from "./HelloWithProps"
import Counter from "./Counter"
import InputTracker from "./InputTracker";
function App() {
  return (
    <div>
      <Hello />
      <HelloWithProps name="Zuzanna" />
      <HelloWithProps name="Szymon" />
      <HelloWithProps name="Sebastian" />
      <Counter/>
      <InputTracker/>
    </div>
  );
}
export default App;
