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
    deleteTodo(state, action) {
      const { id } = action.payload;
      const existingTodo = state.entities.find((todo) => todo.id === id);
      if (existingTodo) {
        state.entities = state.entities.filter((todo) => todo.id !== id);
      }
    },
  },
});

export const { addNewTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;