import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import StorePage from './pages/StorePage'
import NotFoundPage from './pages/NotFoundPage'
import Navigation from './components/Navigation'
import ProductPage from './pages/ProductPage'

const App = () => {
  return (
  <Router>
    <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/store' element={<StorePage/>} />
      <Route path='/store/:id' element={<ProductPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </Router>
  )
}

export default App