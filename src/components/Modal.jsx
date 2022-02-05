import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteTodo } from "../slice/todoSlice";

export default function ModalTodo({ show, handleClose, selectedTodo }) {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
    history.push("/");
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3> { selectedTodo.title } </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Description: {selectedTodo.description}</p>
          <p>Status: {selectedTodo.status}</p>
          <p>CreatedAt: {selectedTodo.createdAt}</p>

          <button
            className="btn btn-danger"
            disabled={selectedTodo.status === 1}
            onClick={() => handleDeleteTodo(selectedTodo.id)}
          >
            Delete
          </button>

          <Link to={`/edit-todo/${selectedTodo.id}`}>
            <button className="btn btn-info text-white">
              Edit
            </button>
          </Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}