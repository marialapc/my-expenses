import { useState } from "react";
import "./ExpensesList.css";

const maxExpenses = 4;
const maxAmount = 100;

const createRandomExpense = () => {
  const expense = { amount: getRandomInt(maxAmount) };
  return expense;
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

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
        {expenses.map((expense, index) => (
          <li key={index}>{expense.amount}</li>
        ))}
      </ul>
      <button onClick={handleAddExpense}>+</button>
      <button onClick={handleDeleteExpense}>-</button>
      <button onClick={handleClearExpenses}>Clear</button>
    </>
  );
};

export { ExpensesList };
