import "./Filters.css";

const Filters = () => {
  function handleOrderExpenses() {
    // const orderedExpenses = expenses.sort();
    // return orderedExpenses;
  }

  return (
    <>
      <div className="filters">
        <button>Category Filter</button>
        <button onClick={handleOrderExpenses}>Order</button>
      </div>
    </>
  );
};

export { Filters };
