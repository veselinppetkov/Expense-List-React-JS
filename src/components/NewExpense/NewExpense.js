import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addExpenseHandler }) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpenseHandler={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
