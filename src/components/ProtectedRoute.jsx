import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({isAllowed,children,redirectTo='/landing'}) => {

  //van condicionales para decidir si dejar ver dependiendo de que haya iniciado sesion
  if(!isAllowed) {
    return <Navigate to={redirectTo}/>
  }

  {/*para no repetir tanto codigo*/}
  return children?children:<Outlet/>
}

export default ProtectedRoute