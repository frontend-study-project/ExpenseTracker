import { createSlice } from "@reduxjs/toolkit";
import { expense } from "../utils/data/expense";

export const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: expense,
    activeItem: -1,
  },
  reducers: {
    ADD_ITEM: (state, action) => ({
      items: [...state.items, action.payload],
      activeItem: -1,
    }),
    UPDATE_ITEM: (state, action) => ({
      items: state.items.map((item) => (item.id === action.payload.id ? action.payload : item)),
      activeItem: -1,
    }),
    DELETE_ITEM: (state, action) => ({
      items: state.items.filter((item) => item.id !== action.payload),
      activeItem: -1,
    }),
    ACTIVE_ITEM: (state, action) => ({
      items: state.items,
      activeItem: action.payload,
    }),
  },
});

export const { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, ACTIVE_ITEM } = itemSlice.actions;
export default itemSlice.reducer;
