import { TotalExpenses } from "../../components/TotalExpenses/TotalExpenses";
import { ExpensesList } from "../../components/ExpensesList/ExpensesList";
import { Filters } from "../../components/Filters/Filters";
import { useState } from "react";
import { createRandomExpense } from "../../utils/createRandomExpense";
import { AddButton } from "../../components/Buttons/AddButton";
import { DeleteButton } from "../../components/Buttons/DeleteButton";
import { ClearButton } from "../../components/Buttons/ClearButton";

const initialState = [createRandomExpense()];

const HomeView = () => {
  const [expenses, setExpenses] = useState(initialState);

  const maxExpenses = 4;

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
      <h1>My expenses</h1>
      <TotalExpenses />
      <Filters />
      <ExpensesList
        expenses={expenses}
        setExpenses={setExpenses}
        initialState={initialState}
      >
        <AddButton onClick={handleAddExpense} />
        <DeleteButton onClick={handleDeleteExpense} />
        <ClearButton onClick={handleClearExpenses} />
      </ExpensesList>
    </>
  );
};

export { HomeView };
