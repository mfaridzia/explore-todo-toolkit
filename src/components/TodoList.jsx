import React from "react";

export default function TodoList() {
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
          <button className="">Add Todo</button>
        </div>
      </div>
      <div className="">
        <table class="">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>TodList1</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>
                <button>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}