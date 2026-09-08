import './App.css'
import Counter from './components/Counter';
import Display from './components/Display';
import CounterProvider from './providers/counter-provider';


function App() {
  return (
    <>
    <CounterProvider>
      <p>Parent Components</p>
       <Counter/>
       <Display/>
    </CounterProvider>
    </>
  )
}

export default App
