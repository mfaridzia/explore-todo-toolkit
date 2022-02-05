import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store from "./store";
import { fetchTodoLists } from "./reducers/todoSlice";
import reportWebVitals from './reportWebVitals';

// load as soon as our app load
store.dispatch(fetchTodoLists());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();