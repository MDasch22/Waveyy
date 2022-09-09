import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { thunkGetAllBeaches } from '../../store/beaches'
import { thunkGetUserSaved } from '../../store/likes'
import CreateBeachModal from '../BeachFormModal'
import ProfilePageBeaches from '../ProfilepageBeaches'

import './profile.css'

export default function ProfilePage() {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const beaches = useSelector(state => Object.values(state.beaches))
  const userSaved = useSelector(state => Object.values(state.saved))

  const [showInfo, setShowInfo] = useState(false)
  const [showBeaches, setShowBeaches] = useState(true)
  const [showSaved, setShowSaved] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  const userBeaches = beaches.filter(beach => beach.ownerId === sessionUser.id)

  const showBeach = () => {
    setShowBeaches(true)
    setShowSaved(false)
  }

  const showSave = () => {
    setShowBeaches(false)
    setShowSaved(true)
  }

  useEffect(() => {
    window.scroll(0, 0)
    dispatch(thunkGetAllBeaches())
    dispatch(thunkGetUserSaved(sessionUser.id))
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
        <button className='save-beach-bttn' onClick={showBeach}>My Beaches</button>
        <button className='saved-beached-bttn' onClick={showSave} >Saved Beaches</button>
      </div>
      </div>
      {showBeaches && (
        <div id="session-beaches">
          <div className='sessionBeach-tab'>
            <div id="session-beaches">
              {userBeaches.length > 0 ?
              <div className='-mybeaches-container'>
                <p className='my-beaches-header'> My Beaches <i className="fa-solid fa-water fa-lg"></i> </p>
                <div className='my-beaches'>
                  {userBeaches.map(beach => {
                  return(
                    <ProfilePageBeaches beach={beach} />
                  )})}
                </div>
              </div>
              :
                <>
                  <div className='noBeaches-2'>
                    <p >No Beaches Yet ...</p>
                    <CreateBeachModal / >
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      )}
      {showSaved && (
        <div id="session-beaches">
          <div className='sessionBeach-tab'>
            {userSaved.length > 0 ?
              <div className='mybeaches-container'>
                <p className='my-beaches-header2'> Saved Beaches <i className="fa-solid fa-bookmark "></i> </p>
                <div className='my-beaches'>
                  {userSaved.map(beach => {
                    return (
                      <ProfilePageBeaches beach={beach.Beach} />
                  )})}
                </div>
              </div>
              :
              <p className='noBeaches'> Nothing saved yet...</p>
            }
          </div>
          <div>

          </div>
        </div>
      )}
    </div>
  )
}
