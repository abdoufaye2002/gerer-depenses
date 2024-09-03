import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);
  const totalExpenses = expenseList.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);
  const RemainingMoney = income - totalExpenses;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Dépenses totales </div>
        <div className={`col ${s.amount}`}>{totalExpenses} fr</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Montant restant</div>
        <div className={`col ${s.amount}`}>{RemainingMoney} fr</div>
      </div>
    </div>
  );
}
