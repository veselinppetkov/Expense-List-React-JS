import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";
import { ExpenseDate } from "./ExpenseDate";

export function ExpenseItem({ title, amount, date }) {
  const [caption, setCaption] = useState(title);
  const clickHandler = (e) => {
    setCaption(`Updated!`);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{caption}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}
