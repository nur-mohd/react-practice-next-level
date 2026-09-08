import { useState } from "react";
import "./Card.css"


const Card = ({name, age}) => {

const [member, setMember] = useState("");

  const clickHandler = (memberName) => {
    setMember(memberName);
  };

  console.log("Member--->:", member);

    return (
        <div  
          onClick={() => clickHandler(name)}
          className="card">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          {/* {member} */}
          {member && <p>Hello Mr. {member}</p>}
        </div>
    );
}

export default Card








