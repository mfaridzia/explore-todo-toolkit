import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../reducers/todoSlice";

export default function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todolists);

   const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className="">
      <div className="">
        <h1>Todo List APP</h1>
      </div>
      <div className="">
        <div className="">
          <button className="">Load TodoList</button>
        </div>
        <div className="">
          <button className="">Add Todo</button>
        </div>
      </div>
      <div className="">
        <table className="">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </button>
                  <Link to={`/edit-todo/${todo.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}