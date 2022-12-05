import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import ProfilePage from './ProfilePage'

export const founders = [
    {
        userId:'12adkoptni4',
        fullname:'Pablo Vega',
        username:'pabloo',
        email:'pablovega89@gmail.com',
        position:'Tech Leader'
    },
    {
        userId:'119odapxx15',
        fullname:'Lorena Sotte',
        username:'loreSotena',
        email:'loresoneta111@hotmail.com',
        position:'UI designer'
    },
    {
        userId:'i32disaoc25',
        fullname:'Nico Posadas',
        username:'nicok',
        email:'84nicolasPos@gmail.com',
        position:'Digital Marketing'
    }
]

const FoundersPage = () => {

    const {pathname} = useLocation()
    const path = pathname.split('/')
    const lastPath = path[path.length - 1];


  return (
    <div>
        {lastPath==='founders'?<>
        <h2>Founders</h2>
        <ul>
            {founders.map(({userId,fullname,position}) => {
                return (<li key={userId}>
                    <h3><Link to={`profile/${userId}`}>{fullname}</Link></h3>
                    <span>{position}</span>
                </li>)
            })}
        </ul>
        </>:null}
        <Routes>
            <Route path='profile/:userId' element={<ProfilePage />}/>
        </Routes>
    </div>
    
  )
}

export default FoundersPage