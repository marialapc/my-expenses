const maxAmount = 100;

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const createRandomExpense = () => {
    const expense = { amount: getRandomInt(maxAmount) };
    return expense;
};

export { createRandomExpense};