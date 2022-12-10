import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate, Link, Outlet} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import StorePage from './pages/StorePage'
import NotFoundPage from './pages/NotFoundPage'
import Navigation from './components/Navigation'
import ProductPage from './pages/ProductPage'
import Dashboard from './pages/Dashboard'
import FoundersPage from './pages/FoundersPage'
import LandingPage from './pages/LandingPage'
import Admin from './pages/Admin'
import AnalyticsPage from './pages/AnalyticsPage' 

//Navigate es para redireccionar
const App = () => {

  const [user, setUser] = useState(null)
  const login = () => {
    setUser({
      id:1,
      name:'John'
    })
  }

  const logOut = () => setUser(null)

  return (
  <Router>

      { 
        user?
        <button onClick={logOut}>logout</button>:
        <button onClick={login}>login</button>
      }

    <Navigation/>
    <Routes>
      <Route path='/landing' element={<LandingPage/>} />
      <Route index element={<LandingPage/>} />
      <Route path='/home' element={<HomePage user={user}/>}/>
      <Route path='/about/*' element={<AboutPage/>} />
      <Route path='/founders/*' element={<FoundersPage/>}/>
      <Route path='/store' element={<StorePage/>} />
      <Route path='/tienda' element={<Navigate to='/store'/>} />
      <Route path='/dashboard/*' element={<Dashboard/>}>
        <Route path='ozuna/*' element={<><Link to='daddy'>daddy</Link><Outlet/></>}>
          <Route path='daddy' element={<h3>Daddy</h3>}/>
        </Route>
      </Route>
      <Route path='/analytics' element={<AnalyticsPage/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/store/:id' element={<ProductPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </Router>
  )
}

export default App