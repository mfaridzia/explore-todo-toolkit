import React from "react";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todolists);

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
        <table class="">
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
                  <button>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}