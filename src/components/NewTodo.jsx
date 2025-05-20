import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-actions";

function NewTodo() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Text" name="title" />
      <input type="submit" value="Add ToDo" />
    </form>
  );
}

export default NewTodo;
