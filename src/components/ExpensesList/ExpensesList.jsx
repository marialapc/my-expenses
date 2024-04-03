import "./ExpensesList.css";

import { useState } from "react";
import { Expense } from "../Expense/Expense";

const maxExpenses = 4;
const maxAmount = 100;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const createRandomExpense = () => {
  const expense = { amount: getRandomInt(maxAmount) };
  return expense;
};

const initialState = [createRandomExpense()];

const ExpensesList = () => {
  const [expenses, setExpenses] = useState(initialState);

  const handleAddExpense = () => {
    if (expenses.length < maxExpenses) {
      const randomExpense = createRandomExpense();
      setExpenses((oldExpenses) => {
        return [...oldExpenses, randomExpense];
      });
    }
  };

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
        <Expense expenses={expenses} />
      </ul>
      <button onClick={handleAddExpense}>+</button>
      <button onClick={handleDeleteExpense}>-</button>
      <button onClick={handleClearExpenses}>Clear</button>
    </>
  );
};

export { ExpensesList };
