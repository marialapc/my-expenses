import { useState } from "react";

const initialState = [{ amount: 27 }];
const maxExpenses = 4;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createRandomExpense() {
  const expense = { amount: getRandomInt(100) };
  return expense;
}

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
    setExpenses((oldExpenses) => {
      let copied = [...oldExpenses];
      copied = initialState;

      return copied;
    });
  };

  return (
    <>
      <ul>
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
