import { TotalExpenses } from "../../components/TotalExpenses/TotalExpenses";
import { ExpensesList } from "../../components/ExpensesList/ExpensesList";

const HomeView = () => {
  return (
    <>
      <TotalExpenses />
      <ExpensesList />
    </>
  );
};

export { HomeView };
