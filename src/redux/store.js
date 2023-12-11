import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./user";
import dateReducer from "./date";
import itemsReducer from "./item";
import categoryReducer from "./category";
export default configureStore({
  reducer: {
    counter: counterReducer,
    date: dateReducer,
    items: itemsReducer,
    category: categoryReducer,
  },
});
// 날짜, items, 카테고리
