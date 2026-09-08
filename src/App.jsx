import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';
import Display from './components/Display';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <div>
       <Counter count={count} setCount={setCount}/>
       <Display count={count}/>
    </div>
    </>
  )
}

export default App
