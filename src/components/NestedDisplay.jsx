const NestedDisplay = ({count}) => {
    return (
        <div className="card-orange">
            <p>Grand Child</p>
            <h1>{count}</h1>
        </div>
    )
}

export default NestedDisplay