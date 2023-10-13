import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTasks = createAsyncThunk(
  'tasks/allTasks',
  async (arg, thunkAPI) => {
    try {
      const res = await axios.get(
        'https://todo-api-dcld.onrender.com/api/user/get-data',
        {
          withCredentials: true,
        },
      );

      return res.data.body.tasks;
    } catch (err) {
      return err.response.status;
    }
  },
);
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (arg, thunkAPI) => {
    const res = await axios.post(
      'https://todo-api-dcld.onrender.com/api/task/add',
      arg,
      {
        withCredentials: true,
      },
    );
    return res.data.body.task;
  },
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTasks.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.tasks = payload;
    });

    ////////////////////////
    builder.addCase(addTask.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addTask.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.tasks.push(payload);
      console.log(payload);
    });
  },
});

export const tasks = tasksSlice.reducer;
