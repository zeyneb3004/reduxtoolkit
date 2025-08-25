import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './pages/Counter/Counter'
import Home from './pages/Home/Home'
import About from './pages/About/About'
function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
       Hello

   <Home/>
        <Counter/>
        <About/>
      </div>
  )
}

export default App
