import './App.css'
import Card from './components/Card'
import Counter from './components/Counter';

function App() {

  const members = [
    {name : "Shakib", age: 10},
    {name : "Rakib", age: 60},
    {name : "Rahim", age: 42},
    {name : "Karim", age: 26}
  ];

  return (
    <>
    <Counter/>

    </>
  )
}

export default App
