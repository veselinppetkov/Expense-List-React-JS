import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem";
import { useState } from "react";

function Expenses({ items }) {
  const [option, setOption] = useState("");

  const dataHandler = (selectedOption) => {
    setOption(selectedOption);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectedOption={dataHandler} />
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
}

export default Expenses;
