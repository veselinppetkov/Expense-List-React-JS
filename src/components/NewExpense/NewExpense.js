import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ exportData }) => {
  const exportInputDataHandler = (inputData) => {
    const updatedInputData = {
      ...inputData,
      id: (10 * Math.random().toFixed(2)).toString(),
    };
    exportData(updatedInputData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm exportInputData={exportInputDataHandler} />
    </div>
  );
};

export default NewExpense;
