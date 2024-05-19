import "./ExpensesList.css";

import { useState } from "react";
import { AddButton } from "../Buttons/AddButton";
import { DeleteButton } from "../Buttons/DeleteButton";
import { ClearButton } from "../Buttons/ClearButton";
import { createRandomExpense } from "../../utils/createRandomExpense";
import { Expense } from "../Expense/Expense";

const initialState = [createRandomExpense()];

const ExpensesList = () => {
  const [expenses, setExpenses] = useState(initialState);

  return (
    <>
      <ul className="expenses-list">
        {expenses.map((expense, index) => (
          <Expense key={index} amount={expense.amount} />
        ))}
      </ul>
      <AddButton expenses={expenses} setExpenses={setExpenses} />
      <DeleteButton setExpenses={setExpenses} />
      <ClearButton initialState={initialState} setExpenses={setExpenses} />
    </>
  );
};

export { ExpensesList };
