import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { updateTodo } from "../slice/todoSlice";
import FormInput from "./FormInput";

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
    <div className="container">
      <div className="text-center mt-3">
        <h1>Edit Todo</h1>
      </div>
      <div className="col-md-6 mx-auto mt-4">
        <div className="d-flex flex-column">
          <FormInput
            labelId="titleInput"
            placeholder="Enter Title..."
            text="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <FormInput
            labelId="descriptionInput"
            placeholder="Description..."
            text="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <FormInput
            labelId="statusInput"
            type="number"
            placeholder="Status"
            text="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          {error && error}
          <button onClick={handleUpdateTodo} className="btn btn-primary">
            Save Todo
          </button>
        </div>
      </div>
    </div>
  );
}