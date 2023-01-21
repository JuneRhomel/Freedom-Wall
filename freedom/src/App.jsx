
import React from 'react'
import LogIn from './components/LogIn'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LogIn/>}/>
    </Routes>
    </>
  )
}

