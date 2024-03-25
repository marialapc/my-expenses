import { TotalExpenses } from "../../components/TotalExpenses/TotalExpenses";
import { ExpensesList } from "../../components/ExpensesList/ExpensesList";
import { Filters } from "../../components/Filters/Filters";

const HomeView = () => {
  return (
    <>
      <h1>My expenses</h1>
      <TotalExpenses />
      <Filters />
      <ExpensesList />
    </>
  );
};

export { HomeView };
