import { createRandomExpense } from "../../utils/createRandomExpense";

const maxExpenses = 4;

const AddButton = ({ expenses, setExpenses }) => {
  const handleAddExpense = () => {
    if (expenses.length < maxExpenses) {
      const randomExpense = createRandomExpense();
      setExpenses((oldExpenses) => {
        return [...oldExpenses, randomExpense];
      });
    }
  };

  return <button onClick={handleAddExpense}>+</button>;
};

export { AddButton };
