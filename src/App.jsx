import { useState } from 'react';
import './App.css'
import Card from './components/Card'
// import Counter from './components/Counter';


function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [members, setMembers] = useState([
      {name : "Shakib", age: 10},
      {name : "Rakib", age: 60},
      {name : "Rahim", age: 42},
      {name : "Karim", age: 26}
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setMembers([...members, {name, age}])
        setMembers((prev) => [
          ...prev, {name, age}])
        setName("");
        setAge("");
    };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        <input type="number" onChange={(e)=>setAge(e.target.value)} value={age}/>
        <button type='submit'>Submit</button>
    </form>
     {members.map((member) => (
        <Card name={member.name} age={member.age} />
      ))}
    {/* <Counter/> */}
    </>
  )
}

export default App
