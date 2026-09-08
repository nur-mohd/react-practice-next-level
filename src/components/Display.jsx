import "./Card.css"
import NestedDisplay from "./NestedDisplay"
const Display = () => {
    return (
        <div className="card-blue">
            <p>Child components</p>
            <NestedDisplay/>
        </div>
    )
}

export default Display