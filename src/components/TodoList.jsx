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
    <div className="">
      <div className="">
        <h1>Todo List App</h1>
      </div>
      <div className="">
        <div className="">
          <Link to="/add-todo">
            <button>Add Todo</button>
          </Link>
        </div>
      </div>
      <div className="">
        { loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h2> Incomplete Todos </h2>
            <TableTodo
              todos={incompleteTodos}
              handleDeleteTodo={handleDeleteTodo}
              toggleStatus={handleToggle}
            />

            <h2> Completed Todos </h2>
            <TableTodo
              todos={completedTodos}
              handleDeleteTodo={handleDeleteTodo}
              toggleStatus={handleToggle}
            />
          </>
        )}
      </div>
    </div>
  );
}