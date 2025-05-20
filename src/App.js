import Filters from "./components/Filters";
import NewTodo from "./components/NewTodo";
import ToDoList from "./components/ToDoList";


function App() {
  return (
    <div className="App">
      <NewTodo />
      <Filters />
      <ToDoList />
    </div>
  );
}

export default App;
