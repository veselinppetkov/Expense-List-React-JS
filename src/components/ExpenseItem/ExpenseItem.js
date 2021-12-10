import "./ExpenseItem.css";

export function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>December 10th 2021</div>
      <div className="expense-item__description">
        <h2>Gym membership</h2>
        <div className="expense-item__price">$45.00</div>
      </div>
    </div>
  );
}
