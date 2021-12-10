import "./ExpenseItem.css";

export function ExpenseItem() {
  const expenseDate = new Date(2021, 12, 10);
  const expenseItem = "Gym membership";
  const expensePrice = 45;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}
