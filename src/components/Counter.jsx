import "./Card.css"
// import { useState } from "react"

const Counter = ({count,  setCount}) => {
    // const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleIncrementByValue = (value) => {
        setCount(count + value)
    }

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count-1)
        }
    };

    return (
        <div className="card">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={()=>handleIncrementByValue(5)}>Increment By Value</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter