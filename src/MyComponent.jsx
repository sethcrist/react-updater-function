import React, { useState } from "react";

const MyComponent = () => {

  // updater function = A function passed as an argument to setState() usually 
  // ex. setYear(year + 1)
  // Allow for safe updates based on the previous state
  // Used with multilple state updates and asynchronous functions
  // Good practice to use updater functions

  const [count, setCount] = useState(0)

  const onHandleIncrement = () => {
    // Takes the PENDING state to calculate NEXT state
    // React puts your updater function in a queue (waiting line)
    // During the next render, it will call them in the same order

    // This wont work
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // This will increase count(c) by 2
    setCount(c => c + 1) //This is out updater function
    setCount(c => c + 1)

  }

  const onHandleReset = () => {
    setCount(0)
  }

  const onHandleDecrement = () => {
    setCount(c => c - 1)
    setCount(c => c - 1)
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={onHandleIncrement}>Increment</button>
      <button onClick={onHandleReset}>Reset</button>
      <button onClick={onHandleDecrement}>Decrease</button>
    </>
  )
}

export default MyComponent