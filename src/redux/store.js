// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import biomedicosReducer from '../redux/biomedicosSlice'

const store = configureStore({
  reducer: {
    biomedicos: biomedicosReducer,
  },
});

export default store;
