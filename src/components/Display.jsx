import "./Card.css"
const Display = ({count}) => {
    return (
        <div className="card-blue">
            {/* <h1>This is Display Component</h1> */}
            <h1>{count}</h1>
        </div>
    )
}

export default Display