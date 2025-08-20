import { useState } from 'react'

import './App.css'
import Cardss from './components/Cardss'

function App() {
  const [count, setCount] = useState(0)
  document.body.style.backgroundColor = '#10172a'

  let myObj = {
    name: "Souvik",
    age: 19,

  }

  return (
    <>
      <h1 className="tailwindReact text-7xl text-white block text-center">Tailwind With React</h1>

      <Cardss channel='Chai Aur Code' btnText="Click Me" />
      <Cardss channel='Chai Aur Code' btnText="Visit Me" />

    </>
  )
}

export default App
