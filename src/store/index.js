import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";

const store = configureStore({
  reducer: {
    EXPENCE: expenseSlice.reducer,
  },
});

export { store };
