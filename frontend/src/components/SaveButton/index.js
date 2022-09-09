import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkGetBeachSaved, thunkSaved, thunkUnsaved } from '../../store/likes'

import './saveButton.css'

export default function SaveButton({beachId}) {
  const dispatch = useDispatch()

  const saved = useSelector(state => Object.values(state.saved))
  const sessionUser = useSelector(state => state.session.user)

  const sessionLike = saved.find(save => save.userId === sessionUser.id)


  useEffect(() => {
    if(sessionUser){
      dispatch(thunkGetBeachSaved(beachId))
    }
  },[dispatch])

  const save = async(e) => {
    e.preventDefault();
    const saved = {
      userId: sessionUser.id,
      beachId: beachId
    }
    await dispatch(thunkSaved(saved))
  }

  const unsave = async(e) => {
    e.preventDefault()
    const likeId = sessionLike.id
    await dispatch(thunkUnsaved(likeId))
    await dispatch(thunkGetBeachSaved(beachId))
  }

  return (
    <div>
      {!sessionLike ?
        <button id="save-button" onClick={save}>
          <i className="fa-regular fa-bookmark fa-lg"></i>
          <p className='save-bttn'> Save </p>
        </button>
        :
        <button id="save-button" onClick={unsave}>
          <i className="fa-solid fa-bookmark fa-lg"></i>
          <p className='save-bttn'> Saved </p>
        </button>
      }

    </div>
  )
}
