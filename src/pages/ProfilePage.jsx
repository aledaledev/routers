import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { founders } from './FoundersPage'

const ProfilePage = () => {

    const {userId} = useParams()
    const {fullname,username, position, email} = founders.find(prof => prof.userId === userId)

  return (
    <div>
      <div>
        <h2>{fullname}</h2>
        <h4>{username}</h4>
        <p>{position}</p>
        <p>{email}</p>
      </div>
      <Link to='/founders'>back to Founders</Link>
    </div>
    
  )
}

export default ProfilePage