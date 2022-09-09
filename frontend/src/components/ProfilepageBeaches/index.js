import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'


export default function ProfilePageBeaches({beach}) {

  const [showOverlay, setShowOverlay] = useState(false)


  return (
    <div id="session-beaches">
      <NavLink
        id="beach-link"
        to={`/beaches/${beach.id}`}
        >
        <img
        className='beach-link__img'
        src={beach.coverImg}
        style={{width: 300,height:300}}
        />
        <div className='beach-link__overlay beach-link__overlay--blur'>
          <p className='beach-link__title'>
            <b>{beach.title}</b>
          </p>
        </div>
      </NavLink>
    </div>
  )
}
