import "./Card.css"
// const Card = ({name, age}) => {

//     if(age < 18) {
//         return <div className="card">"{name} You are too young"</div>
//     }

//     return (
//         <div className="card">
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//         </div>
//     )
// }

// export default Card



// const Card = ({name, age}) => {

//     return (
//         <>
//           {age > 18 && <div className="card">
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//           </div>}

//           {age < 18 && <div className="card">
//             {name} You are too young
//           </div>}
//         </>
//     )
// }

// export default Card




const Card = ({name, age}) => {

    return (
        <>
          {age > 18 ? (
            <div className="card">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
          </div>) : <div className="card">
            {name} You are too young
          </div>}
        </>
    )
}

export default Card








