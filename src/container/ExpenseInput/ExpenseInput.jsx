import { useDispatch } from "react-redux";
import s from "./style.module.css";
import { addExpence } from "store/expense/expense-slice";
export function ExpenseInput(props) {
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const price = formData.get("price");
    dispatch(addExpence({ name, price }));
  };
  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Pomme"'
            name="name"
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 200"
            name="price"
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Ajouter
          </button>
        </div>
      </div>
    </form>
  );
}
