import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatus } from "../slice/todoSlice";
import TableTodo from "./Table";

export default function TodoList() {
  const dispatch = useDispatch();

  const { todolists: { todoItems, loading } } = useSelector((state) => state);
  
  // sort by desc
  const completedTodos = todoItems.filter(todo => {
    return todo.status === 1
  }).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  // sort by asc
  const incompleteTodos = todoItems.filter(todo => {
    return todo.status === 0
  }).sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleToggle = (id) => {
    dispatch(toggleStatus({ id }));
  }

  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-md-10 mx-auto">
          <div className="text-center">
            <h1>Todo List App</h1>
          </div>
          <div className="text-center">
            <div className="mt-3">
              <Link to="/add-todo">
                <button className="btn btn-primary">Add Todo</button>
              </Link>
            </div>
          </div>
          <div className="text-center">
            { loading ? (
              <h2 className="mt-5">Loading...</h2>
            ) : (
              <>
                <h4 className="mt-2"> Incomplete Todos </h4>
                <TableTodo
                  todos={incompleteTodos}
                  handleDeleteTodo={handleDeleteTodo}
                  toggleStatus={handleToggle}
                />

                <h4 className="mt-4"> Completed Todos </h4>
                <TableTodo
                  todos={completedTodos}
                  handleDeleteTodo={handleDeleteTodo}
                  toggleStatus={handleToggle}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}