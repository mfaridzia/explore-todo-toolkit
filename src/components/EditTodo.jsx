import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { updateTodo } from "../slice/todoSlice";

export default function EditTodo() {
  const { pathname } = useLocation();
  const todoId = Number(pathname.replace("/edit-todo/", ""));

  const todo = useSelector((state) =>
    state.todolists.todoItems.find((todo) => todo.id === todoId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);
  const [error, setError] = useState(null);

  const handleUpdateTodo = () => {
    if (title && description) {
      dispatch(
        updateTodo({
          id: todoId,
          title,
          description,
          status: Number(status)
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Pelase fill in all fields.");
    }

    setTitle("");
    setDescription("");
  };

  return (
    <div className="">
      <div className="">
        <h1>Edit Todo</h1>
      </div>
      <div className="">
        <div className="">
          <label htmlFor="titleInput">Title</label>
          <input
            className=""
            type="text"
            id="titleInput"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label htmlFor="descriptionInput">Description</label>
          <input
            className=""
            type="text"
            id="descriptionInput"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label htmlFor="statusInput">Status</label>
          <input
            className=""
            type="number"
            id="statusInput"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          />
          {error && error}
          <button onClick={handleUpdateTodo} className="">
            Save Todo
          </button>
        </div>
      </div>
    </div>
  );
}