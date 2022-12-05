import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.css'

//uso de NavLink para no recargar nav al viajar entre rutas
//el classname nos manda un isActive por default
// 'xxx/*' va tener mas rutas que le sigan
const Navigation = () => {
  return (
    <header>
      <ul>
        <li><NavLink className={({isActive}) => isActive?styles.active:null} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive?styles.active:null} to='/about'>About</NavLink></li>
        <li><NavLink className={({isActive}) => isActive?styles.active:null} to='/store'>Store</NavLink></li>
        <li><NavLink className={({isActive}) => isActive?styles.active:null} to='/dashboard'>Dashboard</NavLink></li>
      </ul>
    </header>
  )
}

export default Navigation