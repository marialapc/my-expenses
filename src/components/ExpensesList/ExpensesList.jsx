import { useState } from "react";

const expense = {
  amount: 100,
};

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    //añadir expense aleatorio, max de cantidades, button clear
    setExpenses((oldExpenses) => {
      return [...oldExpenses, expense];
    });
  };

  const handleDeleteExpense = () => {
    setExpenses((oldExpenses) => {
      const copied = [...oldExpenses];
      copied.pop();

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
    </>
  );
};

export { ExpensesList };
