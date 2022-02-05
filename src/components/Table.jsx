import React from "react";
import { Link } from "react-router-dom";

export default function Table({todos, handleDeleteTodo, toggleStatus}) {
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
              <button
                disabled={todo.status === 1}
                title={todo.status === 1 ? 'cannot be deleted!' : null}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
              <Link to={`/edit-todo/${todo.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => toggleStatus(todo.id)}>
                Toggle Status
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}