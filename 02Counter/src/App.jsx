import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 5
  const addValue = () => {
    counter = counter + 1
    if (counter < 20) {
      setCounter(counter)
    } else {
      setCounter(counter = 20)
    }

  }

  const removeValue = () => {
    counter = counter - 1
    if (counter > 0) {
      setCounter(counter)
    } else {
      setCounter(counter = 0)
    }
  }



  return (
    <>

      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <div className="buttons">

        <button onClick={addValue}>
          Add Value
        </button>
        <br />
        <button onClick={removeValue} >
          Remove Value
        </button>
      </div>
    </>
  )
}

export default App
