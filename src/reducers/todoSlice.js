import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Todo 1", description: "Lorem Ipsum dolor", status: 0 },
  { id: 2, title: "Todo 2", description: "Lorem Ipsum Todo 2", status: 0 },
];
const todoSlice = createSlice({
  name: "todolists",
  initialState,
  reducers: {
    addNewTodo(state, action) {
      state.push(action.payload);
    },
    updateTodo(state, action) {
      const { id, title, description, status } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
        existingTodo.status = status;
      }
    },
  },
});

export const { addNewTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;