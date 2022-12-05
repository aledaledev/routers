import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate, Link, Outlet} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import StorePage from './pages/StorePage'
import NotFoundPage from './pages/NotFoundPage'
import Navigation from './components/Navigation'
import ProductPage from './pages/ProductPage'
import Dashboard from './pages/Dashboard'
import FoundersPage from './pages/FoundersPage'
import ProfilePage from './pages/ProfilePage'

//Navigate es para redireccionar
const App = () => {
  return (
  <Router>
    <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about/*' element={<AboutPage/>} />
      <Route path='/founders/*' element={<FoundersPage/>}/>
      <Route path='/store' element={<StorePage/>} />
      <Route path='/tienda' element={<Navigate to='/store'/>} />
      <Route path='/dashboard/*' element={<Dashboard/>}>
        <Route path='ozuna/*' element={<><Link to='daddy'>daddy</Link><Outlet/></>}>
          <Route path='daddy' element={<h3>Daddy</h3>}/>
        </Route>
      </Route>
      <Route path='/store/:id' element={<ProductPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </Router>
  )
}

export default App