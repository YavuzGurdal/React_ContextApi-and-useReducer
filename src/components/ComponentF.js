import React, { useContext } from 'react'
import { CountContext } from '../App' // bu contextApi


function ComponentF() {

    const x = useContext(CountContext) // x olan degisken, CountContext olan ise contextapi
    console.log(x);

    return (
        <div>
            Count from ComponentF : {x.countState}
            <br />

            <button onClick={() => x.countDispatch({ type: "increment", payload: 3 })} >Increment +3</button>
            <button onClick={() => x.countDispatch({ type: "decrement", payload: 2 })}>Decrement -2</button>
            <button onClick={() => x.countDispatch({ type: "reset" })} >Reset</button>
        </div>
    )
}

export default ComponentF
