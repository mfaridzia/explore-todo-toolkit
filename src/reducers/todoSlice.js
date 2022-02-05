import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Todo 1", description: "Lorem Ipsum dolor", status: 1, createdAt: "2022-02-05T04:41:20.530Z" },
  { id: 2, title: "Todo 2", description: "Lorem Ipsum Todo 2", status: 0, createdAt: "2022-02-05T04:40:20.530Z" },
];
const todoSlice = createSlice({
  name: "todolists",
  initialState,
  reducers: {
    addNewTodo(state, action) {
      state.push(action.payload);
    },
    updateTodo(state, action) {
      const { id, title, description, status, createdAt } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
        existingTodo.status = status;
        existingTodo.createdAt = createdAt
      }
    },
    deleteTodo(state, action) {
      const { id } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        return state.filter((todo) => todo.id !== id);
      }
    }
  },
});

export const { addNewTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;