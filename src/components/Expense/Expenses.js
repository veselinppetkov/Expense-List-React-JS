import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { ExpenseItem } from "./ExpenseItem";
import { useState } from "react";

function Expenses({ items }) {
  const [option, setOption] = useState("2021");

  const dataHandler = (selectedOption) => {
    setOption(selectedOption);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={option} onSelectedOption={dataHandler} />
      {items.map((e) => (
        <ExpenseItem
          key={Math.random()}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
