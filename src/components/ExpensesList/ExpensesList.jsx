import { useState } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createRandomExpense() {
  const expense = { amount: getRandomInt(100) };
  return expense;
}

const maxExpenses = 4;

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([
    createRandomExpense(),
    createRandomExpense(),
  ]);

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
    //volver al estado inicial
    setExpenses((oldExpenses) => {
      let copied = [...oldExpenses];
      copied = [];

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
