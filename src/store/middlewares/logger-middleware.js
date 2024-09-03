import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addExpense,
  setIncome,
  incrementCountActionPerformed,
} from "store/expense/expense-slice";
export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  // predicate: (action) => {
  //     return action.type === "expenseSlice/addExpense" || action.type === "expenseSlice/setIncome"
  // },
  matcher: isAnyOf(addExpense, setIncome),
  effect: async (action, listenerAPI) => {
    console.log(action);
    listenerAPI.dispatch(incrementCountActionPerformed());
    console.log(listenerAPI.getState());
  },
});
