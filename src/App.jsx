import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import StorePage from './pages/StorePage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/store' element={<StorePage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </Router>
  )
}

export default App