import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewTodo } from "../reducers/todoSlice";

export default function AddTodo() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const todosAmount = useSelector((state) => state.todolists.length);

  const handleAddTodo = () => {
    if (title && description) {
      dispatch(
        addNewTodo({
          id: todosAmount + 1,
          title,
          description,
          status: 0,
          createdAt: new Date().toISOString()
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Please fill in all the fields.");
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div className="">
      <div className="">
        <h1>Add Todo</h1>
      </div>
      <div className="">
        <div className="">
          <label htmlFor="titleInput"> Title </label>
          <input
            className=""
            name="title"
            type="text"
            placeholder="Enter Title..."
            id="titleInput"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />

          <label htmlFor="descriptionInput"> Description </label>
          <input
            className=""
            name="description"
            type="text"
            placeholder="Description..."
            id="descriptionInput"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />

          {error && error}

          <button onClick={handleAddTodo} className="">
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}