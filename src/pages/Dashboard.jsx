import React from 'react'
import { Link, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {

    //redireccion dentro del componente
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const path = pathname.split('/');
    const lastPath = path[path.length - 1];

    const handleClick = () => {
        navigate('/')
    }

  return (
    <div>
        <h2>Dashboard (private)</h2>
        <button onClick={handleClick}>redirect to home</button>
        <br/>
        <br/>
        {lastPath==='mix'?<Link to='/dashboard'>Out of mix</Link>:<Link to='mix'>Go to mix</Link>}
        <Routes>
          <Route path='mix' element={<div>Mix</div>}/>
        </Routes>
        <br/>
        <br/>
        <Link to='ozuna'>Ozuna</Link>
        <br/>
        <br/>
        <Outlet /> 
    </div>
  )
}

export default Dashboard