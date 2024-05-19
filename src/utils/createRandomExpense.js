import { getRandomInt } from "./getRandomInit";

const maxAmount = 100;

const createRandomExpense = () => {
    const expense = { amount: getRandomInt(maxAmount) };
    return expense;
};

export { createRandomExpense};