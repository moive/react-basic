import React, { useState } from 'react'

const Counter = () => {
   const [counter, setCounter] = useState(0) 
    let increase = ()=> {
        setCounter(counter+1)
    }
    console.log(counter);
    return (
        <>
            <h2>Counter</h2>
            <p>{ counter }</p>
            <div>
                <button
                    className="btn btn-success"
                    onClick={
                    increase
                    }>increase +</button>
            </div>
        </>
    )
}

export default Counter
