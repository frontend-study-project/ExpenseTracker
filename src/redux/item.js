import { createSlice } from '@reduxjs/toolkit';
import { expense } from '../utils/data/expense';

export const itemSlice = createSlice({
  name: 'items',
  initialState: {
    items: expense,
    activeItem: -1,
  },
  reducers: {
    ADD_ITEM: (state, action) => {
      state.items.push(action.payload);
    },
    UPDATE_ITEM: (state, action) => {
      state.items = state.items.map((item) => (item.id === action.payload.id ? action.payload : item));
    },
    DELETE_ITEM: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    ACTIVE_ITEM: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

export const { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, ACTIVE_ITEM } = itemSlice.actions;
export default itemSlice.reducer;
