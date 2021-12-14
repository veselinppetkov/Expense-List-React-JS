import "./ExpenseItem.css";
import Card from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";

export function ExpenseItem({ title, amount, date }) {
  const clickHandler = (e) => {
    console.log(e.target.textContent);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}
