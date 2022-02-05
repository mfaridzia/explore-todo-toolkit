import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import TodoList  from "./components/TodoList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <TodoList />
          </Route>
          <Route path="/add-todo">
            <h1>Add Todo</h1>
          </Route>
          <Route path="/edit-todo">
            <h1>Edit Todo</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}