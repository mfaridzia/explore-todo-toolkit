import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../reducers/todoSlice";
import TableTodo from "./Table";

export default function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todolists);
  
  // sort by desc
  const completedTodos = todos.filter(todo => {
    return todo.status === 1
  }).sort((a, b) => Date.parse(b) - Date.parse(a));

  // sort by asc
  const incompleteTodos = todos.filter(todo => {
    return todo.status === 0
  }).sort((a, b) => Date.parse(a) - Date.parse(b));

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
          <Link to="/add-todo">
            <button>Add Todo</button>
          </Link>
        </div>
      </div>
      <div className="">
        <h2> Completed Todos </h2>
        <TableTodo
          todos={completedTodos}
          handleDeleteTodo={handleDeleteTodo}
        />

        <h2> Incomplete Todos </h2>
        <TableTodo
          todos={incompleteTodos}
          handleDeleteTodo={handleDeleteTodo}
        />
      </div>
    </div>
  );
}