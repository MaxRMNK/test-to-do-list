import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTask(state, action) {},
    editTask(state, action) {},
    deleteTask(state, action) {},
    completeTask(state, action) {},
  },
});
