import "./TotalExpenses.css";

import { useState } from "react";

const maxValue = 10;
const minValue = 0;

const TotalExpenses = () => {
  const [myState, setMystate] = useState(0);

  const handleClickAdd = () => {
    if (myState < maxValue) {
      setMystate(myState + 1);
    }
  };

  const handleClickRemove = () => {
    if (myState > minValue) {
      setMystate(myState - 1);
    }
  };

  return (
    <article className="total-expenses">
      <h2>Gastado total</h2>
      <section>
        <h2>{myState}$</h2>
      </section>
      <button onClick={handleClickAdd}>+</button>
      <button onClick={handleClickRemove}>-</button>
    </article>
  );
};

export { TotalExpenses };
