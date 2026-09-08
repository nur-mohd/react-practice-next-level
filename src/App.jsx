import './App.css'
import Card from './components/Card'

function App() {

  const members = [
    {name : "Shakib", age: 10},
    {name : "Rakib", age: 60},
    {name : "Rahim", age: 42},
    {name : "Karim", age: 26}
  ];

  return (
    <>
     {/* Manually Rendering */}
      {/* <Card name={members[0].name} age={members[0].age} />
      <Card name={members[1].name} age={members[1].age} />
      <Card name={members[2].name} age={members[2].age} />
      <Card name={members[3].name} age={members[3].age} /> */}


    {/* Dynamic Rendering */}
    {
      members.filter((member) => member.age > 18 ).sort((a,b) => a.age - b.age).map(member => (
        <Card name={member.name} age = {member.age} />
      ))
    }
    </>
  )
}

export default App
