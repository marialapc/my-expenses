import './TotalExpenses.css'

import { useState } from 'react'


const TotalExpenses = () => {  
    // const myState = useState(0)
    // const myStateValue = myState[0];
    // const updateMyState = myState[1];
    //destructuring

    const [myState, setMystate] = useState(0)

    const handleClickAdd = () => {
        if (myState < 10) {
        setMystate(myState+ 1)
        }
    }

    const handleClickRemove = () => {
        if (myState > 0) {
        setMystate(myState - 1)
        }
    }

    return (
        <article className='total-expenses'>
           <h1>Gastado total</h1>
           <section>
            <h2>{myState}</h2>
           </section>
           <button onClick={handleClickAdd}>+</button>
           <button onClick={handleClickRemove}>-</button>

        </article>

    )
}

export {TotalExpenses}