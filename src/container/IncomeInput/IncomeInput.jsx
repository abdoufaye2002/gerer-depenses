import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { setIncome } from "store/expense/expense-slice";

export function IncomeInput(props) {
  const dispatch = useDispatch();
  const income = useSelector((store) => store.EXPENSE.income);
  function updateIncome(e) {
    const income = e.target.value;
    dispatch(setIncome(income));
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Revenu</div>
      <div className="col-6">
        <input
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
          onChange={updateIncome}
          defaultValue={income}
        />
      </div>
    </div>
  );
}
