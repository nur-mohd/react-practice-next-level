import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleIncrementByValue = (value) => {
        setCount(count + value)
    }

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={()=>handleIncrementByValue(5)}>Increment By Value</button>
            {count}
            <button onClick={()=> setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Counter