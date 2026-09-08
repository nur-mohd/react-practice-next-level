import "./Card.css"
import NestedDisplay from "./NestedDisplay"
const Display = ({count}) => {
    return (
        <div className="card-blue">
            <p>Child components</p>
            <NestedDisplay count={count}/>
        </div>
    )
}

export default Display