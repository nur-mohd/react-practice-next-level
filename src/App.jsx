import { useState } from 'react';
import './App.css'
import Card from './components/Card'
// import Counter from './components/Counter';

const members = [
  {name : "Shakib", age: 10},
  {name : "Rakib", age: 60},
  {name : "Rahim", age: 42},
  {name : "Karim", age: 26}
];

function App() {
    const [name, setName] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)

    };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
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
