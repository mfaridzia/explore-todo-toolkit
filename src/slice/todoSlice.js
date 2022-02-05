import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodoLists = createAsyncThunk("todos/fetchTodoLists", async () => {
  const response = await fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list");
  const todos = await response.json();
  return todos;
});

const todoSlice = createSlice({
  name: "todolists",
  initialState: {
    todoItems: [],
    loading: false,
  },
  reducers: {
    addNewTodo(state, action) {
      state.todoItems.push(action.payload);
    },
    updateTodo(state, action) {
      const { id, title, description, status, createdAt } = action.payload;
      const existingTodo = state.todoItems.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
        existingTodo.status = status;
        existingTodo.createdAt = createdAt
      }
    },
    toggleStatus(state, action) {
      const { id } = action.payload;
      const existingTodo = state.todoItems.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.status = existingTodo.status === 1 ? 0 : 1;
      }
    },
    deleteTodo(state, action) {
      const { id } = action.payload;
      const existingTodo = state.todoItems.find((todo) => todo.id === id);
      if (existingTodo) {
        state.todoItems = state.todoItems.filter((todo) => todo.id !== id);
      }
    },
  },
  extraReducers: {
    [fetchTodoLists.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTodoLists.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoItems = [...state.todoItems, ...action.payload];
    },
    [fetchTodoLists.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { addNewTodo, updateTodo, deleteTodo, toggleStatus } = todoSlice.actions;

export default todoSlice.reducer;