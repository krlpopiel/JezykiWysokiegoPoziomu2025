import Hello from "./Hello";
import HelloWithProps from "./HelloWithProps"
import Counter from "./Counter"
import InputTracker from "./InputTracker";
import LoginStatus from "./LoginStatus";
import TodoList from "./TodoList";
import LoginForm from "./LoginForm";
function App() {
  return (
    <div>
      <Hello />
      <HelloWithProps name="Zuzanna" />
      <HelloWithProps name="Szymon" />
      <HelloWithProps name="Sebastian" />
      <Counter/>
      <InputTracker/>
      <LoginStatus isLoggedIn={1}/>
      <LoginStatus isLoggedIn={0}/>
      <TodoList todos={['Odfajkować ćwiczenia z Reacta', 'Zrobić zadanie 1']} />
      <LoginForm/>
    </div>
  );
}
export default App;
