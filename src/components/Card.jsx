// const Card = (props) => {
//     // return <h1>Card Component</h1>
//     console.log(props);

//     return (
//         <div>
//             <p>First Name: {props.firstName}</p>
//             <p>Last Name: {props.lastName}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

//export default Card


const Card = ({firstName, lastName, age}) => {

    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default Card