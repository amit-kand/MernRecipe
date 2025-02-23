import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Add_Recipe from './pages/Add_Recipe'
import Profile from './pages/Profile'
import Saved from './pages/Saved'
import Register from './pages/Register'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/add' element={<Add_Recipe />}/>
        <Route path='/saved' element={<Saved />}/>
        
        
        
      </Routes>
    </Router>
    </>
  )
}

export default App
