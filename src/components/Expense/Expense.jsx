const Expense = (props) => {
  const Expense = props.expenses.map((expense, index) => (
    <li key={index}>{expense.amount}</li>
  ));

  return Expense;
};

export { Expense };
