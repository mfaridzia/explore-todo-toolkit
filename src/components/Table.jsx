import React from "react";
import { Link } from "react-router-dom";

export default function Table({todos, handleDeleteTodo}) {
  return (
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
  )
}