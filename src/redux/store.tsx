import { configureStore } from "@reduxjs/toolkit";
import pillsReducer from "../features/pillSlice";
import modalReducer from "../features/modalSlice";

export const store = configureStore({
   reducer: {
      pills: pillsReducer,
      modal: modalReducer,
   },
});
