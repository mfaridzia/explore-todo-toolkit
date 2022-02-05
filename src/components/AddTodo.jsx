import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewTodo } from "../slice/todoSlice";
import FormInput from "./FormInput";

export default function AddTodo() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const todosAmount = useSelector((state) => state.todolists.todoItems.length);

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
          {error && error}
          <button onClick={handleAddTodo} className="">
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}