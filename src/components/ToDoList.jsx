import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todos/todos-actions";
import { seleceVisibleTodos } from "../store/todos/todos-selector";
import { selectActiveFilter } from "../store/filters/filter-selector";
import { useParams } from "react-router-dom";

function ToDoList() {
  const {filter} = useParams();
  const todos = useSelector(state => seleceVisibleTodos(state, filter));
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.title}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
