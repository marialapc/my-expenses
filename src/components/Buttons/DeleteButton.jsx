const DeleteButton = ({ setExpenses }) => {
  const handleDeleteExpense = () => {
    setExpenses((oldExpenses) => {
      const copied = [...oldExpenses];
      copied.pop();

      return copied;
    });
  };

  return <button onClick={handleDeleteExpense}>-</button>;
};

export { DeleteButton };
