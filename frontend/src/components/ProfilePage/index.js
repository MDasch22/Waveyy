import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { thunkGetAllBeaches } from '../../store/beaches'
import ProfilePageBeaches from '../ProfilepageBeaches'

import './profile.css'

export default function ProfilePage() {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const beaches = useSelector(state => Object.values(state.beaches))

  const [showInfo, setShowInfo] = useState(false)
  const [showBeaches, setShowBeaches] = useState(false)
  const [showSaved, setShowSaved] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  const userBeaches = beaches.filter(beach => beach.ownerId === sessionUser.id)

  useEffect(() => {
    dispatch(thunkGetAllBeaches())
  }, [dispatch])

  return (
    <div id="profile-page-container">
      <div className='profile-page-header'>
        <h1>Welcome {sessionUser.username}</h1>
        <p className='show-info' onClick={() => setShowInfo(!showInfo)}>Show email</p>
        {showInfo &&
          <p className='user-email'>{sessionUser.email}</p>
        }
      <div id='profile-tabs'>
        <button onClick={() => setShowBeaches(!showBeaches)}>My Beaches</button>
        <button>Saved Beaches</button>
      </div>
      </div>
      {showBeaches && (
        <div id="session-beaches">
          {userBeaches.map(beach => {
          return(
            <ProfilePageBeaches beach={beach} />
          )})}
        </div>
      )}
    </div>
  )
}
