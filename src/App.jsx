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
import ProtectedRoute from './components/ProtectedRoute'

//Navigate es para redireccionar
const App = () => {

  const [user, setUser] = useState(null)
  const login = () => {
    setUser({
      id:1,
      name:'John',
      permissions:['analize'],
      roles:['admin']
    })
  }

  const logOut = () => setUser(null)

  //para colocar rutas protegidas que esten al mismo nivel
  return (
  <Router>

      { 
        user?
        <button onClick={logOut}>logout</button>:
        <button onClick={login}>login</button>
      }

    <Navigation/>
    <Routes>
      <Route index element={<LandingPage/>} />
      <Route path='/landing' element={<LandingPage/>} />
      <Route element={<ProtectedRoute isAllowed={!!user}/>}>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/dashboard/*' element={<Dashboard/>}>
      </Route>
      <Route path='/about/*' element={<AboutPage/>} />
      <Route path='/founders/*' element={<FoundersPage/>}/>
      <Route path='/store' element={<StorePage/>} />
      <Route path='/tienda' element={<Navigate to='/store'/>} />
        <Route path='ozuna/*' element={<><Link to='daddy'>daddy</Link><Outlet/></>}>
          <Route path='daddy' element={<h3>Daddy</h3>}/>
        </Route>
      </Route>
      <Route path='/analytics' element={
        <ProtectedRoute 
        isAllowed={!!user && user.permissions.includes('analize')}
        redirectTo='/home'>
          <AnalyticsPage/>
        </ProtectedRoute>
      }/>
      <Route path='/admin' element={
        <ProtectedRoute 
        isAllowed={!!user && user.roles.includes('admin')}
        redirectTo='/home'>
          <Admin/>
        </ProtectedRoute>
      }/>
      <Route path='/store/:id' element={<ProductPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </Router>
  )
}

export default App