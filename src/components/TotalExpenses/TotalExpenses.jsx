import './TotalExpenses.css'

import { useState } from 'react'


const TotalExpenses = () => {  //destructuring
    const myState = useState(0)
    const myStateValue = myState[0];
    const updateMyState = myState[1];

    const handleClickAdd = () => {
        //no mas de 10
        updateMyState(myStateValue + 1)
    }

    const handleClickRemove = () => {
        //no menos de 10
        updateMyState(myStateValue - 1)
    }

    return (
        <article className='total-expenses'>
           <h1>Gastado total</h1>
           <section>
            <h2>{myStateValue}</h2>
           </section>
           <button onClick={handleClickAdd}>+</button>
           <button onClick={handleClickRemove}>-</button>

        </article>

    )
}

export {TotalExpenses}