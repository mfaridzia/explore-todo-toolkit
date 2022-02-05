import React from "react";
import { Link } from "react-router-dom";

export default function Table({todos, handleDeleteTodo, toggleStatus}) {
  return (
    <table className="mx-auto table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>
              <button
                className="btn btn-danger"
                disabled={todo.status === 1}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>

              <Link to={`/edit-todo/${todo.id}`}>
                <button className="btn btn-info text-white">
                  Edit
                </button>
              </Link>

              <button
                className="btn btn-secondary"
                onClick={() => toggleStatus(todo.id)}
              >
                Toggle Status
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}