import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext();

const CounterProvider = ({children}) => {

    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{count, setCount}}>
            {/* <h1>This is counter provider</h1> */}
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider