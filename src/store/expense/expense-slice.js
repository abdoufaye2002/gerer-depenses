import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    // state initiale
    expenseList: [],
    income: 1000,
  },
  reducers: {
    addExpence: (currentSlice, action) => {
      currentSlice.expenseList.push({
        ...action.payload,
        price: Number.parseFloat(action.payload.price),
      });
      // console.log("addExpence()", action.payload);
    }, // action.payload est recuperer dans le dispatch
    setIncome: (currentSlice, action) => {
      currentSlice.income = Number.parseFloat(action.payload);
    },
  },
});

const { addExpence, setIncome } = expenseSlice.actions;

export { addExpence, setIncome };
