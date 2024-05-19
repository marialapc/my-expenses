import "./ExpensesList.css";
import { Expense } from "../Expense/Expense";

const ExpensesList = ({ expenses, children }) => {
  return (
    <>
      <ul className="expenses-list">
        {expenses.map((expense, index) => (
          <Expense key={index} amount={expense.amount} />
        ))}
      </ul>
      {children}
    </>
  );
};

export { ExpensesList };
