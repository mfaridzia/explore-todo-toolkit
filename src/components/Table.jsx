import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalTodo from "./Modal";

export default function Table({ todos, handleDeleteTodo, toggleStatus }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState([]);

  const handleSelectedTodo = (selected) => {
    setShowModal(true);
    setSelectedTodo(selected);
  }

  return (
    <>
      <ModalTodo
        show={showModal}
        handleClose={() => setShowModal(false)}
        selectedTodo={selectedTodo}
      />
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
              <td onClick={() => handleSelectedTodo(todo)}>
                {todo.title}
              </td>
              <td onClick={() => handleSelectedTodo(todo)}>
                {todo.description}
              </td>
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
    </>
  )
}