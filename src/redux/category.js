import { createSlice } from '@reduxjs/toolkit';
import { categoryList } from '../utils/data/categoryList';

export const categorySlice = createSlice({
  name: 'category',
  initialState: { items: categoryList, value: 0 },
  reducers: {
    ADD_CATEGORY: (state, action) => {
      state.items.push(action.payload);
    },
    plus: state => {
      state.value += 1;
    },
    minus: state => {
      state.value -= 1;
    },
  },
});

export const { ADD_CATEGORY, plus, minus } = categorySlice.actions;
export default categorySlice.reducer;
