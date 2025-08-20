import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setbgColor] = useState("olive")

  let changeBgColorRed = () => {
    setbgColor('red')
  }
  let changeBgColorGreen = () => {
    setbgColor('green')
  }
  let changeBgColorBlue = () => {
    setbgColor('blue')
  }
  let changeBgColorBlack = () => {
    setbgColor('black')
  }

  let changeBgColorYellow = () => {
    setbgColor("yellow")
  }
  let changeBgColorPurple = () => {
    setbgColor("purple")
  }
  let changeBgColorPink = () => {
    setbgColor("pink")
  }

  return (
    <>
      <div className='w-full h-screen duration-200 rounded-md shadow-lg' style={{ backgroundColor: bgColor }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  rounded-2xl px-3 py-2'>
            <button type="button" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-400' onClick={changeBgColorRed}>Red</button>
            <button type="button" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-400' onClick={changeBgColorGreen}>Green</button>
            <button type="button" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-400' onClick={changeBgColorBlue}>Blue</button>
            <button type="button" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' onClick={changeBgColorBlack}>Black</button>
            <button type="button" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-400' onClick={changeBgColorPurple}>Purple</button>
            <button type="button" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400' onClick={changeBgColorYellow}>Yellow</button>
            <button type="button" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-400' onClick={changeBgColorPink}>Pink</button>
          </div>
        </div>

      </div >
    </>
  )
}

export default App
