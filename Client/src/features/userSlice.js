// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  loggedIn: false,
  password:'',
  selectedModel: '', // Possible values: "palm", "chatgpt", "dalle"
  palmKey: '',
  chatgptKey: '',
  dalleKey: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
      },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    setPalmKey: (state, action) => {
      state.palmKey = action.payload;
    },
    setChatGPTKey: (state, action) => {
      state.chatgptKey = action.payload;
    },
    setDALL_EKey: (state, action) => {
      state.dalleKey = action.payload;
    },
  },
});

export const {
  setUserName,
  setLoggedIn,
  setSelectedModel,
  setPalmKey,
  setChatGPTKey,
  setDALL_EKey,
} = userSlice.actions;

export default userSlice.reducer;
