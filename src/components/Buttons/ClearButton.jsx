const ClearButton = ({ initialState, setExpenses }) => {
  const handleClearExpenses = () => {
    setExpenses(initialState);
  };
  return <button onClick={handleClearExpenses}>Clear</button>;
};

export { ClearButton };
