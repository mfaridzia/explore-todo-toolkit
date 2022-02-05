import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-todo">
            <AddTodo />
          </Route>
          <Route path="/edit-todo">
            <EditTodo />
          </Route>
          <Route path="/">
            <TodoList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}