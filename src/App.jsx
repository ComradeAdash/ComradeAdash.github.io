import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <p class="font-inter text-8xl font-semibold w-full leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-black/10 to-green-800 p-2"> Adam Siergiej</p>
      </div>
    </>
  )
}

export default App
