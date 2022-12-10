import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
        <h2>About</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <Link to='/founders'>view founders</Link>
    </div>
  )
}

export default AboutPage