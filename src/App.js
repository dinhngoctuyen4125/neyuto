import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Marquee from './components/Marquee'
import Home from './Home'

import SnakeXenzia from './components/projects/snakexenzia/SnakeXenzia'
import Hangman from './components/projects/hangman/Hangman'

const App = () => {
  return (
    <>
      <Marquee />
      <Routes>
        <Route path="/neyuto" element={< Home />} />
        <Route path="/neyuto/snakexenzia" element={< SnakeXenzia />} />
        <Route path="/neyuto/hangman" element={< Hangman />} />
      </Routes>      
    </>
  )
}

export default App