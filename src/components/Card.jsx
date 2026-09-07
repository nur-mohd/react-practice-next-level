// const Card = (props) => {
//     console.log(props);

//     return (
//         <div>
//             {props.children}
//             <p>First Name: {props.firstName}</p>
//             <p>Last Name: {props.lastName}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

// export default Card


const Card = ({children, firstName, lastName, age}) => {

    return (
        <div>
            {children}
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default Card