import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    // state initiale
    expenseList: [],
  },
  reducers: {
    addExpence: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
      // console.log("addExpence()", action.payload);
    }, // action.payload est recuperer dans le dispatch
  },
});

const { addExpence } = expenseSlice.actions;

export { addExpence };
