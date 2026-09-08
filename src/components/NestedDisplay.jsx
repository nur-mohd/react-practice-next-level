import { use } from "react";
import { CounterContext } from "../providers/counter-provider";

const NestedDisplay = () => {
    const {count} = use(CounterContext);
    return (
        <div className="card-orange">
            <p>Grand Child</p>
            <h1>{count}</h1>
        </div>
    )
}

export default NestedDisplay