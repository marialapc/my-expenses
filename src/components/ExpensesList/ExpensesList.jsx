import "./ExpensesList.css";

import { useState } from "react";
import { AddButton } from "../Buttons/AddButton";
import { createRandomExpense } from "../../utils/createRandomExpense";
import { Expense } from "../Expense/Expense";

const initialState = [createRandomExpense()];

const ExpensesList = () => {
  const [expenses, setExpenses] = useState(initialState);

  const handleDeleteExpense = () => {
    setExpenses((oldExpenses) => {
      const copied = [...oldExpenses];
      copied.pop();

      return copied;
    });
  };

  const handleClearExpenses = () => {
    setExpenses(initialState);
  };

  return (
    <>
      <ul className="expenses-list">
        {expenses.map((expense, index) => (
          <Expense key={index} amount={expense.amount} />
        ))}
      </ul>
      <AddButton expenses={expenses} setExpenses={setExpenses} />
      <button onClick={handleDeleteExpense}>-</button>
      <button onClick={handleClearExpenses}>Clear</button>
    </>
  );
};

export { ExpensesList };
