import React from 'react'
import './Home.css'
import { useSelector , useDispatch } from 'react-redux'
const Home = () => {
const count=useSelector((state)=>state.counter.value)
const name=useSelector((state)=>state.counter.name)
const surname=useSelector((state)=>state.counter.surname)
const dispatch=useDispatch

  return (
   <header className='header'>Header</header>
  )
}

export default Home